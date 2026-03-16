#!/usr/bin/env python3
"""
ISS Statistics Question Bank - Local server with answer correction and explanation support.
Serves static files and accepts POST to update answers.js and explanations.js directly.
"""
import http.server
import json
import os
import re
import urllib.parse

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ANSWERS_FILE = os.path.join(SCRIPT_DIR, 'answers.js')
EXPLANATIONS_FILE = os.path.join(SCRIPT_DIR, 'explanations.js')
NOTES_FILE = os.path.join(SCRIPT_DIR, 'notes.js')
QUESTION_EDITS_FILE = os.path.join(SCRIPT_DIR, 'question_edits.js')

# Load .env for local dev (optional; no extra deps)
_env_path = os.path.join(SCRIPT_DIR, '.env')
if os.path.isfile(_env_path):
    with open(_env_path, 'r') as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#') and '=' in line:
                k, _, v = line.partition('=')
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def apply_correction(paper, section, year, q_number, new_answer):
    """Update a single answer in answers.js. Returns (success, error_msg)."""
    try:
        with open(ANSWERS_FILE, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        target_path = [paper, section, year]
        path_stack = []  # stack of (indent, key) we're inside
        result_lines = []
        replaced = False

        for line in lines:
            # Match "key": { - entering a block
            key_match = re.match(r'^(\s*)"([^"]+)"\s*:\s*\{', line)
            if key_match:
                indent, key = len(key_match.group(1)), key_match.group(2)
                if path_stack:
                    while path_stack and path_stack[-1][0] >= indent:
                        path_stack.pop()
                path_stack.append((indent, key))

            # Match "NN": "x" - question line
            q_match = re.match(r'^(\s*)"(\d+)"\s*:\s*"([a-d])"', line)
            if q_match and q_match.group(2) == q_number:
                indent, num, old = q_match.group(1), q_match.group(2), q_match.group(3)
                # Check if we're in the right path: paper, section, year
                path_keys = [p[1] for p in path_stack]
                if path_keys[-3:] == target_path:
                    rest = line[len(q_match.group(0)):]
                    result_lines.append(f'{indent}"{num}": "{new_answer}"{rest}')
                    replaced = True
                    continue

            # Pop on closing brace (dedent)
            stripped = line.strip()
            if stripped == '}' or stripped.endswith('},'):
                if path_stack and re.match(r'^\s*\}', line):
                    line_indent = len(line) - len(line.lstrip())
                    while path_stack and path_stack[-1][0] >= line_indent:
                        path_stack.pop()

            result_lines.append(line)

        if not replaced:
            return False, 'Question not found in answers.js'

        with open(ANSWERS_FILE, 'w', encoding='utf-8') as f:
            f.writelines(result_lines)
        return True, None
    except Exception as e:
        return False, str(e)


def apply_explanation_update(paper, section, year, q_number, new_note):
    """Update a single explanation in explanations.js. Returns (success, error_msg)."""
    try:
        with open(EXPLANATIONS_FILE, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        target_path = [paper, section, year]
        path_stack = []
        result_lines = []
        replaced = False
        i = 0

        while i < len(lines):
            line = lines[i]

            # Enter block: "key": {
            key_match = re.match(r'^(\s*)"([^"]+)"\s*:\s*\{', line)
            if key_match:
                indent, key = len(key_match.group(1)), key_match.group(2)
                if path_stack:
                    while path_stack and path_stack[-1][0] >= indent:
                        path_stack.pop()
                path_stack.append((indent, key))
                result_lines.append(line)
                i += 1
                continue

            # Match "NN": ... - question line
            q_match = re.match(r'^(\s*)"(\d+)"\s*:\s*(.*)$', line)
            if q_match and q_match.group(2) == q_number:
                path_keys = [p[1] for p in path_stack]
                last3 = path_keys[-3:] if len(path_keys) >= 3 else []
                if last3 == target_path:
                    indent = q_match.group(1)
                    rest = q_match.group(3)
                    escaped = str(new_note).replace('\\', '\\\\').replace('`', '\\`')

                    if rest.strip().startswith('`'):
                        # Template literal: find closing backtick (not escaped); skip opener on first line
                        j = i
                        closed = False
                        found_opener = False
                        while j < len(lines):
                            l = lines[j]
                            for k in range(len(l)):
                                if l[k] == '`' and (k == 0 or l[k - 1] != '\\'):
                                    if j == i and not found_opener:
                                        found_opener = True
                                        continue
                                    remainder = l[k + 1:]
                                    result_lines.append(
                                        indent + '"' + q_number + '": `' + escaped + '`' + remainder
                                    )
                                    i = j
                                    closed = True
                                    break
                            if closed:
                                break
                            j += 1
                        if not closed:
                            return False, 'Malformed template literal in explanations.js'
                    else:
                        # Single-line: replace with template literal
                        trail = re.match(r'^[\'"`]?.*?[\'"`]?(\s*(?:,|\}|//.*)*)$', rest)
                        remainder = trail.group(1) if trail else ''
                        result_lines.append(indent + '"' + q_number + '": `' + escaped + '`' + remainder)
                    replaced = True
                    i += 1
                    continue

            # Pop on closing brace
            if re.match(r'^\s*\}', line):
                line_indent = len(line) - len(line.lstrip())
                while path_stack and path_stack[-1][0] >= line_indent:
                    path_stack.pop()

            result_lines.append(line)
            i += 1

        if not replaced:
            return False, 'Question not found in explanations.js'

        with open(EXPLANATIONS_FILE, 'w', encoding='utf-8') as f:
            f.writelines(result_lines)
        return True, None
    except Exception as e:
        return False, str(e)


def apply_question_edit(paper, section, year, q_number, text, topic, options):
    """Update a single question edit in question_edits.js. Returns (success, error_msg)."""
    try:
        content = ''
        if os.path.isfile(QUESTION_EDITS_FILE):
            with open(QUESTION_EDITS_FILE, 'r', encoding='utf-8') as f:
                content = f.read()
        else:
            content = 'const QUESTION_EDITS = {};'

        match = re.search(r'const\s+QUESTION_EDITS\s*=\s*(\{[\s\S]*\})\s*;', content)
        obj = {}
        if match:
            try:
                obj = json.loads(match.group(1))
            except json.JSONDecodeError:
                obj = {}

        if paper not in obj:
            obj[paper] = {}
        if section not in obj[paper]:
            obj[paper][section] = {}
        if year not in obj[paper][section]:
            obj[paper][section][year] = {}

        opts = []
        if isinstance(options, list):
            for o in options[:4]:
                lbl = str(o.get('label', '')).lower().strip()
                if lbl not in ('a', 'b', 'c', 'd'):
                    lbl = chr(97 + len(opts))
                opts.append({'label': lbl, 'text': str(o.get('text', ''))})
        while len(opts) < 4:
            opts.append({'label': chr(97 + len(opts)), 'text': ''})

        payload = {'text': str(text or ''), 'topic': str(topic or ''), 'options': opts}
        obj[paper][section][year][str(q_number)] = json.dumps(payload)

        new_content = 'const QUESTION_EDITS = ' + json.dumps(obj, indent=2) + ';\n'
        with open(QUESTION_EDITS_FILE, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True, None
    except Exception as e:
        return False, str(e)


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=SCRIPT_DIR, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/config':
            contact = os.environ.get('CONTACT_EMAIL', 'Contact admin for access')
            self.send_json(200, {'contactDetails': contact})
        else:
            super().do_GET()

    def do_POST(self):
        if self.path == '/api/auth':
            try:
                length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(length).decode('utf-8')
                data = json.loads(body)
                user = (data.get('username') or '').strip()
                passwd = data.get('password') or ''
                expected_user = os.environ.get('ADMIN_USERNAME', '')
                expected_pass = os.environ.get('ADMIN_PASSWORD', '')
                if expected_user and expected_pass and user == expected_user and passwd == expected_pass:
                    admin_name = os.environ.get('ADMIN_NAME', expected_user or 'Admin')
                    self.send_json(200, {'ok': True, 'adminName': admin_name})
                else:
                    self.send_json(401, {'ok': False, 'error': 'Invalid username or password'})
            except Exception as e:
                self.send_json(500, {'ok': False, 'error': str(e)})
        elif self.path == '/api/correct':
            try:
                length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(length).decode('utf-8')
                data = json.loads(body)
                paper = data.get('paper')
                section = data.get('section')
                year = data.get('year')
                q = str(data.get('q'))
                answer = str(data.get('answer', '')).lower()
                if answer not in ('a', 'b', 'c', 'd'):
                    self.send_json(400, {'ok': False, 'error': 'Invalid answer'})
                    return
                if not all([paper, section, year, q]):
                    self.send_json(400, {'ok': False, 'error': 'Missing params'})
                    return
                ok, err = apply_correction(paper, section, year, q, answer)
                if ok:
                    self.send_json(200, {'ok': True})
                else:
                    self.send_json(500, {'ok': False, 'error': err or 'Write failed'})
            except Exception as e:
                self.send_json(500, {'ok': False, 'error': str(e)})
        elif self.path == '/api/explanations':
            try:
                length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(length).decode('utf-8')
                data = json.loads(body)
                edits = []
                if isinstance(data.get('edits'), list) and data['edits']:
                    edits = data['edits']
                elif data.get('paper') and data.get('section') and data.get('year') and data.get('q') is not None:
                    edits = [{
                        'paper': data['paper'],
                        'section': data['section'],
                        'year': data['year'],
                        'q': data['q'],
                        'note': data.get('note', ''),
                    }]
                if not edits:
                    self.send_json(400, {'ok': False, 'error': 'Missing params'})
                    return
                valid = []
                for e in edits:
                    if e.get('paper') and e.get('section') and e.get('year') and e.get('q') is not None:
                        valid.append({
                            'paper': e['paper'],
                            'section': e['section'],
                            'year': e['year'],
                            'q': str(e['q']),
                            'note': str(e.get('note', '')),
                        })
                if not valid:
                    self.send_json(400, {'ok': False, 'error': 'No valid edits'})
                    return
                by_key = {}
                for c in valid:
                    by_key[f"{c['paper']}|{c['section']}|{c['year']}|{c['q']}"] = c
                unique = list(by_key.values())
                for c in unique:
                    ok, err = apply_explanation_update(
                        c['paper'], c['section'], c['year'], c['q'], c['note']
                    )
                    if not ok:
                        self.send_json(404, {'ok': False, 'error': err or 'Question not found'})
                        return
                self.send_json(200, {'ok': True, 'count': len(unique)})
            except json.JSONDecodeError:
                self.send_json(400, {'ok': False, 'error': 'Invalid JSON'})
            except Exception as e:
                self.send_json(500, {'ok': False, 'error': str(e)})
        elif self.path == '/api/notes':
            try:
                length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(length).decode('utf-8')
                data = json.loads(body)
                edits = data.get('edits', [])
                if not edits:
                    self.send_json(400, {'ok': False, 'error': 'Missing edits'})
                    return
                
                count = 0
                for e in edits:
                    paper = e.get('paper')
                    section = e.get('section')
                    section_id = e.get('sectionId')
                    content = e.get('content')
                    label = e.get('label')
                    delete = e.get('delete', False)
                    if paper and section and section_id:
                        # For delete, content can be None
                        target_content = None if delete else content
                        ok, err = apply_note_update(paper, section, section_id, target_content, label)
                        if not ok:
                            self.send_json(404, {'ok': False, 'error': err or 'Section not found'})
                            return
                        count += 1
                self.send_json(200, {'ok': True, 'count': count})
            except Exception as e:
                self.send_json(500, {'ok': False, 'error': str(e)})
        elif self.path == '/api/questions':
            try:
                length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(length).decode('utf-8')
                data = json.loads(body)
                edits = []
                if isinstance(data.get('edits'), list) and data['edits']:
                    edits = data['edits']
                elif data.get('paper') and data.get('section') and data.get('year') and data.get('q') is not None:
                    edits = [{
                        'paper': data['paper'],
                        'section': data['section'],
                        'year': data['year'],
                        'q': data['q'],
                        'text': data.get('text', ''),
                        'topic': data.get('topic', ''),
                        'options': data.get('options', []),
                    }]
                if not edits:
                    self.send_json(400, {'ok': False, 'error': 'Missing params'})
                    return
                valid = []
                for e in edits:
                    if e.get('paper') and e.get('section') and e.get('year') and e.get('q') is not None:
                        valid.append({
                            'paper': e['paper'],
                            'section': e['section'],
                            'year': str(e['year']),
                            'q': str(e['q']),
                            'text': str(e.get('text', '')),
                            'topic': str(e.get('topic', '')),
                            'options': e.get('options') or [],
                        })
                if not valid:
                    self.send_json(400, {'ok': False, 'error': 'No valid edits'})
                    return
                for c in valid:
                    ok, err = apply_question_edit(
                        c['paper'], c['section'], c['year'], c['q'],
                        c['text'], c['topic'], c['options']
                    )
                    if not ok:
                        self.send_json(500, {'ok': False, 'error': err or 'Write failed'})
                        return
                self.send_json(200, {'ok': True, 'count': len(valid)})
            except json.JSONDecodeError:
                self.send_json(400, {'ok': False, 'error': 'Invalid JSON'})
            except Exception as e:
                self.send_json(500, {'ok': False, 'error': str(e)})
        else:
            self.send_error(404)

    def send_json(self, code, obj):
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(obj).encode('utf-8'))


def apply_note_update(paper, section, section_id, new_content, label=None):
    """Update, append, or delete a section content in notes.js. Returns (success, error_msg)."""
    try:
        with open(NOTES_FILE, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        replaced = False
        # Pre-pass: add first section to empty topic - format EXACTLY like prob (multi-line, each key on own line)
        if not (new_content is None) and label:
            for idx, l in enumerate(lines):
                # Match "sections": [] (handles both inline and multi-line format)
                if '"sections": []' not in l:
                    continue
                # Inline: "comp": { "title": "...", "sections": [], "tips": "" }
                if f'"{section}"' in l and '"sections": []' in l:
                    m = re.match(r'^(\s*)', l)
                    base = m.group(1) if m else ''
                    title_m = re.search(r'"title"\s*:\s*"([^"]*)"', l)
                    tips_m = re.search(r'"tips"\s*:\s*"([^"]*)"', l)
                    title = title_m.group(1) if title_m else section.replace('-', ' ').title()
                    tips_val = tips_m.group(1) if tips_m else ''
                    json_content = json.dumps(new_content)
                    block = (
                        base + f'"{section}": {{\n'
                        + base + '    "title": ' + json.dumps(title) + ',\n'
                        + base + '    "sections": [\n'
                        + base + '        {\n'
                        + base + '            "id": "' + section_id + '",\n'
                        + base + '            "label": ' + json.dumps(label) + ',\n'
                        + base + '            "content": ' + json_content + '\n'
                        + base + '        }\n'
                        + base + '    ],\n'
                        + base + '    "tips": ' + json.dumps(tips_val) + '\n'
                        + base + '},\n'
                    )
                    lines[idx] = block
                    replaced = True
                    break
                # Multi-line: "sections": [] on its own line; find parent topic by looking backwards
                sect_indent = len(re.match(r'^(\s*)', l).group(1)) if re.match(r'^(\s*)', l) else 0
                for j in range(idx - 1, -1, -1):
                    prev = lines[j]
                    prev_indent = len(re.match(r'^(\s*)', prev).group(1)) if re.match(r'^(\s*)', prev) else 0
                    key_m = re.match(r'^(\s*)"([^"]+)"\s*:\s*\{', prev)
                    if key_m and prev_indent < sect_indent:
                        found_key = key_m.group(2)
                        if found_key == section:
                            base = key_m.group(1)
                            # Extract title and tips from the block (lines between start and idx)
                            title = section.replace('-', ' ').title()
                            tips_val = ''
                            for k in range(j + 1, idx):
                                tm = re.search(r'"title"\s*:\s*"([^"]*)"', lines[k])
                                if tm:
                                    title = tm.group(1)
                                tpm = re.search(r'"tips"\s*:\s*"([^"]*)"', lines[k])
                                if tpm:
                                    tips_val = tpm.group(1)
                            json_content = json.dumps(new_content)
                            block = (
                                base + f'"{section}": {{\n'
                                + base + '    "title": ' + json.dumps(title) + ',\n'
                                + base + '    "sections": [\n'
                                + base + '        {\n'
                                + base + '            "id": "' + section_id + '",\n'
                                + base + '            "label": ' + json.dumps(label) + ',\n'
                                + base + '            "content": ' + json_content + '\n'
                                + base + '        }\n'
                                + base + '    ],\n'
                                + base + '    "tips": ' + json.dumps(tips_val) + '\n'
                                + base + '},\n'
                            )
                            # Find end of block: }, at same indent
                            end_idx = idx
                            for k in range(idx + 1, len(lines)):
                                if re.match(r'^\s*\},?\s*$', lines[k]) and len(re.match(r'^(\s*)', lines[k]).group(1)) == len(base):
                                    end_idx = k
                                    break
                            lines[j:end_idx + 1] = block.splitlines(keepends=True)
                            replaced = True
                        break
                    if prev_indent < sect_indent and prev.strip() and not key_m:
                        break  # crossed into a different block
                if replaced:
                    break

        target_path = [paper, section]
        path_stack = [] # list of (indent, key)
        result_lines = []
        inside_sections_array = False
        inside_target_id = False
        sections_indent = ""
        
        is_delete = (new_content is None)
        
        # Helpful aliases
        target_paper = paper
        target_section = section
        i = 0
        while i < len(lines):
            line = lines[i]
            indent_match = re.match(r'^(\s*)', line)
            current_indent = len(indent_match.group(1)) if indent_match else 0

            # Pop from stack only when dedenting. Skip pop on: closing brace/bracket, or empty lines
            # (empty lines have indent 0 and would incorrectly pop everything).
            if line.strip() and not re.match(r'^\s*[\}\]]', line):
                while path_stack and path_stack[-1][0] >= current_indent:
                    path_stack.pop()

            # (old single-line expansion removed; handled after key detection)

            # Standard path tracking
            key_match = re.match(r'^(\s*)"([^"]+)"\s*:\s*([\{\[])', line)
            if key_match:
                indent, key, bracket = len(key_match.group(1)), key_match.group(2), key_match.group(3)
                path_stack.append((indent, key))
                pk = [p[1] for p in path_stack]

                if key == "sections":
                    pk = [p[1] for p in path_stack]
                    if len(pk) >= 3 and pk[-3:-1] == target_path:
                        inside_sections_array = True
                        sections_indent = key_match.group(1)

            # Match start of a section object: {
            if inside_sections_array and re.match(r'^\s*\{', line) and not replaced:
                j = i + 1
                found_id = None
                while j < len(lines) and not re.match(r'^\s*[\}\]]', lines[j]):
                    m = re.search(r'"id"\s*:\s*"([^"]+)"', lines[j])
                    if m:
                        found_id = m.group(1)
                        break
                    j += 1
                
                if found_id == section_id:
                    if is_delete:
                        while i < len(lines) and not re.match(r'^\s*\}', lines[i]): i += 1
                        i += 1 # closing brace
                        if i < len(lines) and re.match(r'^\s*,', lines[i]): i += 1
                        replaced = True
                        continue
                    else:
                        inside_target_id = True

            # Match "id": "section_id"
            id_match = re.search(r'"id"\s*:\s*"([^"]+)"', line)
            if id_match:
                pk = [p[1] for p in path_stack]
                if len(pk) >= 3 and pk[-3:] == [paper, section, "sections"] and id_match.group(1) == section_id:
                    inside_target_id = True
                else:
                    if len(pk) >= 3 and pk[-3:] == [paper, section, "sections"]:
                        inside_target_id = False

            # Match "label": ...
            label_match = re.match(r'^(\s*)"label"\s*:\s*(.*)$', line)
            if inside_target_id and label_match and label:
                indent = label_match.group(1)
                result_lines.append(f'{indent}"label": "{label}",\n')
                i += 1
                continue

            # Match "content": ... or "tips": ...
            content_match = re.match(r'^(\s*)"(content|tips)"\s*:\s*(.*)$', line)
            if content_match:
                match_type = content_match.group(2)
                is_target = False
                if match_type == "content" and inside_target_id:
                    is_target = True
                elif match_type == "tips" and section_id == "TIPS_PROPERTY":
                    pk = [p[1] for p in path_stack]
                    if len(pk) >= 2 and pk[-2:] == [paper, section]:
                        is_target = True

                if is_target:
                    indent = content_match.group(1)
                    rest = content_match.group(3)
                    json_content = json.dumps(new_content)
                    
                    if rest.strip().startswith('`'):
                        # Multi-line backtick: find end
                        while i < len(lines) and '`' not in lines[i][lines[i].find('`')+1 if i==i else 0:]:
                            i += 1
                        l = lines[i]
                        end_pos = l.find('`', l.find('`')+1 if i==i else 0)
                        remainder = l[end_pos+1:] if end_pos != -1 else ""
                        result_lines.append(f'{indent}"{match_type}": {json_content}{remainder}')
                    else:
                        trail = re.search(r'([,\]\}]?\s*)$', rest)
                        remainder = trail.group(1) if trail else ''
                        result_lines.append(f'{indent}"{match_type}": {json_content}{remainder}\n')
                    
                    replaced = True
                    inside_target_id = False
                    i += 1
                    continue

            # Handle appending new section at end of sections array
            if inside_sections_array and re.match(r'^\s*\]', line) and not replaced and label:
                if result_lines:
                    k = len(result_lines) - 1
                    while k >= 0 and not result_lines[k].strip(): k -= 1
                    if k >= 0 and "}" in result_lines[k] and "," not in result_lines[k]:
                        result_lines[k] = result_lines[k].replace("}", "},")
                
                indent = sections_indent + "    "
                json_content = json.dumps(new_content)
                new_section_block = [
                    indent + "{\n",
                    indent + f'    "id": "{section_id}",\n',
                    indent + f'    "label": "{label}",\n',
                    indent + f'    "content": {json_content}\n',
                    indent + "}\n"
                ]
                result_lines.extend(new_section_block)
                replaced = True

            # Pop on closing brace or bracket - only pop when we've dedented to that block's level
            if re.match(r'^\s*[\}\]]', line):
                if path_stack and current_indent <= path_stack[-1][0]:
                    path_stack.pop()
                if re.match(r'^\s*\]', line):
                    inside_sections_array = False
                inside_target_id = False

            result_lines.append(line)
            i += 1

        if not replaced and not is_delete:
            return False, f'Section ID "{section_id}" not found in {paper}/{section}'

        with open(NOTES_FILE, 'w', encoding='utf-8') as f:
            f.writelines(result_lines)
        return True, None
    except Exception as e:
        return False, str(e)


def run(port=8000):
    with http.server.HTTPServer(('', port), Handler) as httpd:
        print(f'Serving at http://localhost:{port}/main.html')
        print('Answer corrections will be written to answers.js')
        print('Explanation edits will be written to explanations.js')
        httpd.serve_forever()


if __name__ == '__main__':
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    run(port)
