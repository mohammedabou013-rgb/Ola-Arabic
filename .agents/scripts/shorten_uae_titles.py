import re, os, sys

files = [f"artifacts/api-server/src/data/uae-grade{i}.ts" for i in range(1, 9)]

# English mappings for common long titles
en_map = {
    "Getting to Know Each Other": "Introductions",
    "My First Words": "First Words",
    "My Little Body": "Body",
    "My Five Senses": "Senses",
    "My Healthy Food": "Healthy Food",
    "My Little World": "My World",
    "My Family and Me": "Family",
    "My Friends and Me": "Friends",
    "My Neighbours and Me": "Neighbours",
    "The Clock and the Date": "Clock and Date",
    "In the Music Room": "Music Room",
    "In the Yard": "Yard",
    "In the Bus": "Bus",
    "My Dearest Friends": "Best Friends",
    "Arts... Artists": "Arts",
    "Meeting and Farewell": "Meeting",
    "Family Gatherings": "Family",
    "No to Bullying": "No Bullying",
    "The Year of Tolerance": "Year of Tolerance",
    "My Foreign Friend": "Foreign Friend",
    "The Safety Generation": "Safety Generation",
    "Open-Minded": "Open-Minded",
    "Noise and Disorder": "Noise",
    "Long Live My Country": "My Country",
    "The Role Model": "Role Model",
    "Loyalty and Belonging": "Loyalty",
    "Volunteering is a Purpose": "Volunteering",
    "Advertising and Culture": "Advertising",
    "Food and Drink": "Food",
    "Coexistence and Tolerance": "Tolerance",
    "Science and Technology": "Science",
    "Energy Sources": "Energy",
    "Hope Probe": "Hope Probe",
}

def simplify_english(en):
    if en in en_map:
        return en_map[en]
    # letter lessons: extract letter after "Letter " or after "— "
    m = re.search(r"Letter\s+([A-Za-z]+)", en)
    if m:
        return m.group(1)
    m = re.search(r"—\s*([A-Za-z]+)$", en)
    if m:
        return m.group(1)
    # animal pair letter lessons: e.g. "Bear & Wolf — Dal/Dzal" -> "Dal/Dzal"
    m = re.search(r"—\s*([^—]+)$", en)
    if m:
        return m.group(1).strip()
    # remove leading "My ", "The ", "In the "
    en = re.sub(r"^(My |The |In the )", "", en)
    # remove trailing " and ..." clauses (keep first noun)
    en = re.sub(r"\s+and\s+.*$", "", en)
    # remove "..." ellipsis
    en = en.replace("...", "")
    # strip
    en = en.strip()
    return en if en else "Lesson"

def shorten_non_en(text):
    # remove common long prefixes
    text = re.sub(r"^(Kata-Kata |Badan Saya |Badanku yang Kecil |Makanan Sihat Saya |Makanan Lazat |Duniaku yang Kecil |Saya dan |Aku dan |Di |Dalam |Di Bilik |Di Ruang |Di Laman |Di Lapangan |Di Bus |Jam dan |Hari-Hari |Bulan-Bulan |Tahun |La |Les |Los |El |La |Mon |Ma |Mes |Mis |Mi |Une |Un |Des )", "", text)
    text = re.sub(r"(^| )Saya($| )", " ", text)
    text = re.sub(r"(^| )Aku($| )", " ", text)
    text = re.sub(r"(^| )dan .*$", "", text)
    text = re.sub(r"(^| )et .*$", "", text)
    text = re.sub(r"(^| )y .*$", "", text)
    text = text.strip()
    return text if text else "Pelajaran"

lesson_title_re = re.compile(r'\s+title: t\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\)')

for f in files:
    if not os.path.exists(f):
        print(f"MISSING: {f}")
        continue
    with open(f, "r", encoding="utf-8") as r:
        content = r.read()
    new_content = []
    last_end = 0
    changed = 0
    for m in lesson_title_re.finditer(content):
        # Only replace lesson titles: heuristic - check if preceding context has 'lessons:' or not grade/unit title
        # We replace all titles except grade-level (line has 'number:') or unit-level? Actually we can replace all for simplicity; grade/unit titles are already brief.
        ar, en, ms, id_, fr, es = m.groups()
        new_en = simplify_english(en)
        # If the English title is unchanged after simple rules, keep others unchanged too
        if new_en == en and en not in en_map:
            new_ms, new_id, new_fr, new_es = ms, id_, fr, es
        else:
            new_ms = shorten_non_en(ms) if ms != en else new_en
            new_id = shorten_non_en(id_) if id_ != en else new_en
            new_fr = shorten_non_en(fr) if fr != en else new_en
            new_es = shorten_non_en(es) if es != en else new_en
        # For Arabic, keep as is (already simple) unless it is a letter lesson with animal
        new_ar = ar
        if "— حَرْف" in ar or "— د / ذ" in ar or "— ر / ز" in ar or "— س / ش" in ar:
            # Extract the letter part after —
            new_ar = ar.split("—")[-1].strip()
        # Keep English if same as Arabic-derived? We already have new_en
        new_line = f't("{new_ar}", "{new_en}", "{new_ms}", "{new_id}", "{new_fr}", "{new_es}")'
        if new_line != m.group(0):
            changed += 1
        new_content.append(content[last_end:m.start()])
        new_content.append(new_line)
        last_end = m.end()
    new_content.append(content[last_end:])
    new_text = "".join(new_content)
    with open(f, "w", encoding="utf-8") as w:
        w.write(new_text)
    print(f"{f}: changed {changed} lesson titles")
