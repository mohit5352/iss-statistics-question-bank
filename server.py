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
        else:
            self.send_error(404)

    def send_json(self, code, obj):
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(obj).encode('utf-8'))


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
