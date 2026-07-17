import re
src = "artifacts/api-server/src/data/indonesia-grade4.ts"
out = "artifacts/api-server/src/data/indonesia-grade5.ts"

with open(src, "r", encoding="utf-8") as r:
    content = r.read()

# Change grade ID references
content = content.replace("indonesia-g4", "indonesia-g5")
content = content.replace("indonesiaGrade4", "indonesiaGrade5")
content = content.replace("السنة الرابعة", "السنة الخامسة")
content = content.replace("Stage 4", "Stage 5")
content = content.replace("Tahun 4", "Tahun 5")
content = content.replace("Kelas 4", "Kelas 5")
content = content.replace("Année 4", "Année 5")
content = content.replace("Año 4", "Año 5")
content = content.replace("الصف الرابع في المدرسة الإبتدائية الإسلامية الإندونيسية", "الصف الخامس في المدرسة الإبتدائية الإسلامية الإندونيسية")
content = content.replace("Grade 4", "Grade 5")
content = content.replace("kelas 4", "kelas 5")
content = content.replace("4e année", "5e année")
content = content.replace("4.º grado", "5.º grado")
content = content.replace("#16A34A", "#8B5CF6")

with open(out, "w", encoding="utf-8") as w:
    w.write(content)
print(f"Created {out}")
