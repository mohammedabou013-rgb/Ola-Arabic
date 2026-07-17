import re, pathlib

files = [
    'artifacts/ola-arabic-mobile/app/(tabs)/index.tsx',
    'artifacts/ola-arabic-mobile/app/(tabs)/practice.tsx',
    'artifacts/ola-arabic-mobile/app/(tabs)/profile.tsx',
    'artifacts/ola-arabic-mobile/app/grade/[id].tsx',
    'artifacts/ola-arabic-mobile/app/lesson/[id].tsx',
]

replacements = {
    'artifacts/ola-arabic-mobile/app/(tabs)/index.tsx': {
        r"import\s+\{\s*Star,\s*Flame,\s*Target,\s*Trophy,\s*BookOpen\s*\}\s+from\s+'@expo/vector-icons';\n": "import { Feather } from '@expo/vector-icons';\n",
        r'<Star\s+': '<Feather name="star" ',
        r'<Flame\s+': '<Feather name="trending-up" ',
        r'<Target\s+': '<Feather name="target" ',
        r'<Trophy\s+': '<Feather name="award" ',
        r'<BookOpen\s+': '<Feather name="book-open" ',
    },
    'artifacts/ola-arabic-mobile/app/(tabs)/practice.tsx': {
        r"import\s+\{\s*Brain,\s*Zap,\s*Target,\s*Ear,\s*Star,\s*RefreshCw,\s*ArrowLeft\s*\}\s+from\s+'@expo/vector-icons';\n": "import { Feather } from '@expo/vector-icons';\n",
        r'<Brain\s+': '<Feather name="cpu" ',
        r'<Zap\s+': '<Feather name="zap" ',
        r'<Target\s+': '<Feather name="target" ',
        r'<Ear\s+': '<Feather name="headphones" ',
        r'<Star\s+': '<Feather name="star" ',
        r'<RefreshCw\s+': '<Feather name="refresh-cw" ',
        r'<ArrowLeft\s+': '<Feather name="arrow-left" ',
    },
    'artifacts/ola-arabic-mobile/app/(tabs)/profile.tsx': {
        r"import\s+\{\s*Star,\s*Flame,\s*Target,\s*Trophy\s*\}\s+from\s+'@expo/vector-icons';\n": "import { Feather } from '@expo/vector-icons';\n",
        r'<Star\s+': '<Feather name="star" ',
        r'<Flame\s+': '<Feather name="trending-up" ',
        r'<Target\s+': '<Feather name="target" ',
        r'<Trophy\s+': '<Feather name="award" ',
    },
    'artifacts/ola-arabic-mobile/app/grade/[id].tsx': {
        r"import\s+\{\s*Star,\s*Play,\s*ChevronLeft\s*\}\s+from\s+'@expo/vector-icons';\n": "import { Feather } from '@expo/vector-icons';\n",
        r'<Star\s+': '<Feather name="star" ',
        r'<Play\s+': '<Feather name="play" ',
        r'<ChevronLeft\s+': '<Feather name="chevron-left" ',
    },
    'artifacts/ola-arabic-mobile/app/lesson/[id].tsx': {
        r"import\s+\{\s*Star,\s*Volume2,\s*Mic,\s*Check,\s*X,\s*Play,\s*Trophy\s*\}\s+from\s+'@expo/vector-icons';\n": "import { Feather } from '@expo/vector-icons';\n",
        r'<Star\s+': '<Feather name="star" ',
        r'<Volume2\s+': '<Feather name="volume-2" ',
        r'<Mic\s+': '<Feather name="mic" ',
        r'<Check\s+': '<Feather name="check" ',
        r'<X\s+': '<Feather name="x" ',
        r'<Play\s+': '<Feather name="play" ',
        r'<Trophy\s+': '<Feather name="award" ',
    },
}

for f in files:
    path = pathlib.Path(f)
    text = path.read_text(encoding='utf-8')
    for pattern, repl in replacements[f].items():
        text = re.sub(pattern, repl, text)
    path.write_text(text, encoding='utf-8')
    print(f'Updated {f}')
