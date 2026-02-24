#!/usr/bin/env python3
"""
ISS Statistics Question Bank - Local server with answer correction support.
Serves static files and accepts POST to update answers.js directly.
"""
import http.server
import json
import os
import re
import urllib.parse

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ANSWERS_FILE = os.path.join(SCRIPT_DIR, 'answers.js')


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

    def do_POST(self):
        if self.path == '/api/correct':
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
        httpd.serve_forever()


if __name__ == '__main__':
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    run(port)
