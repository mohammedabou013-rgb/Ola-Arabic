import re

path = 'artifacts/api-server/src/data/indonesia-grade3.ts'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines, 1):
    for m in re.finditer(r't\(("[^"]*")\s*,\s*("[^"]*")\s*,\s*("[^"]*")\s*,\s*("[^"]*")\s*,\s*("[^"]*")\s*,\s*("[^"]*")\)', line):
        args = [g.strip('"') for g in m.groups()]
        if all(a == args[0] for a in args):
            print(f'{i}: {line.strip()[:120]}')
