import re

path = 'artifacts/api-server/src/data/indonesia-grade2.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern: buildLesson("id", "unitId", N, "ar", "en", "ms", "id", "fr", "es", [
# Replace with: buildLesson("id", "unitId", N, ["ar", "en", "ms", "id", "fr", "es"], [
pattern = r'buildLesson\("([^"]+)", "([^"]+)", (\d+), "([^"]+)", "([^"]+)", "([^"]+)", "([^"]+)", "([^"]+)", "([^"]+)", \['
replacement = r'buildLesson("\1", "\2", \3, ["\4", "\5", "\6", "\7", "\8", "\9"], ['
new_content = re.sub(pattern, replacement, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Fixed', new_content.count('buildLesson('), 'buildLesson calls')
