import re
import sys

files = [
    'artifacts/api-server/src/data/indonesia-grade1.ts',
    'artifacts/api-server/src/data/indonesia-grade2.ts',
    'artifacts/api-server/src/data/indonesia-grade3.ts',
    'artifacts/api-server/src/data/indonesia-grade4.ts',
    'artifacts/api-server/src/data/indonesia-grade5.ts',
    'artifacts/api-server/src/data/indonesia-grade6.ts',
]

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    # Count t("arabic", "arabic", ...)
    bad = 0
    for m in re.finditer(r't\(("[^"]*")\s*,\s*("[^"]*")\s*,\s*("[^"]*")\s*,\s*("[^"]*")\s*,\s*("[^"]*")\s*,\s*("[^"]*")\)', content):
        args = [g.strip('"') for g in m.groups()]
        if all(a == args[0] for a in args):
            bad += 1
    print(f'{path}: {bad} bad t() calls')
