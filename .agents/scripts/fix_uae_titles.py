import re, os
files = [f"artifacts/api-server/src/data/uae-grade{i}.ts" for i in range(1, 9)]
for f in files:
    with open(f, "r", encoding="utf-8") as r:
        content = r.read()
    # Add title: before bare t() calls that lost their title: prefix.
    # Avoid changing t() that already has a property name before it (description:, intro:, translation:, etc.)
    new_content = re.sub(r'(?<![a-zA-Z0-9_][a-zA-Z0-9_]*:\s*)\bt\(', 'title: t(', content)
    with open(f, "w", encoding="utf-8") as w:
        w.write(new_content)
    print(f"Fixed: {f}")
