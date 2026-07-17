import re, os
files = [f"artifacts/api-server/src/data/uae-grade{i}.ts" for i in range(1, 9)]
for f in files:
    with open(f, "r", encoding="utf-8") as r:
        content = r.read()
    # Add title: before t() that lost its prefix (appears after a comma)
    content = re.sub(r',\s*t\(', ', title: t(', content)
    with open(f, "w", encoding="utf-8") as w:
        w.write(content)
    print(f"Fixed: {f}")
