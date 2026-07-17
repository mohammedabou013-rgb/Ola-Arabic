import re

path = 'artifacts/api-server/src/data/indonesia-grade3.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'المَوَادُّ الدِّرَاسِيَّةُ': ("School Subjects", "Mata Pelajaran", "Mata Pelajaran", "Matières scolaires", "Asignaturas escolares"),
    'أَسْمَاءُ الْحَيَوَانَاتِ': ("Animal Names", "Nama Haiwan", "Nama Hewan", "Noms d'animaux", "Nombres de animales"),
    'الأَمْرَاضُ': ("Illnesses", "Penyakit", "Penyakit", "Maladies", "Enfermedades"),
    'الرِّيَاضَةُ': ("Sports", "Sukan", "Olahraga", "Sports", "Deportes"),
    'أَصْدِقَائِي': ("My Friends", "Kawan-kawan Saya", "Teman-teman Saya", "Mes amis", "Mis amigos"),
    'الْحَدِيقَةُ': ("The Garden", "Taman", "Taman", "Le jardin", "El jardín"),
}

for ar, (en, ms, id, fr, es) in replacements.items():
    # Replace all occurrences of t("ar", "ar", "ar", "ar", "ar", "ar")
    old = f't("{ar}", "{ar}", "{ar}", "{ar}", "{ar}", "{ar}")'
    new = f't("{ar}", "{en}", "{ms}", "{id}", "{fr}", "{es}")'
    count = content.count(old)
    content = content.replace(old, new)
    print(f'Replaced {count} for {ar}')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done')
