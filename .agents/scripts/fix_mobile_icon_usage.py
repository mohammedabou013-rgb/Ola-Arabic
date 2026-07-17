import pathlib, re

# Fix index.tsx StatCard
idx = pathlib.Path('artifacts/ola-arabic-mobile/app/(tabs)/index.tsx')
text = idx.read_text(encoding='utf-8')

# Replace StatCard type and usage
old_statcard = '''  const StatCard = ({
    icon: Icon,
    label,
    value,
    color,
    bg,
  }: {
    icon: typeof Star;
    label: string;
    value: string;
    color: string;
    bg: string;
  }) => (
    <View style={[styles.statCard, { backgroundColor: bg, borderColor: colors.border }]}>
      <View style={[styles.iconWrap, { backgroundColor: color }]}>
        <Icon color="#fff" size={20} />
      </View>'''
new_statcard = '''  const StatCard = ({
    icon,
    label,
    value,
    color,
    bg,
  }: {
    icon: string;
    label: string;
    value: string;
    color: string;
    bg: string;
  }) => (
    <View style={[styles.statCard, { backgroundColor: bg, borderColor: colors.border }]}>
      <View style={[styles.iconWrap, { backgroundColor: color }]}>
        <Feather name={icon as any} color="#fff" size={20} />
      </View>'''
text = text.replace(old_statcard, new_statcard)

# Replace icon props
replacements = [
    ('icon={Star}', 'icon="star"'),
    ('icon={Flame}', 'icon="trending-up"'),
    ('icon={Target}', 'icon="target"'),
    ('icon={Trophy}', 'icon="award"'),
]
for old, new in replacements:
    text = text.replace(old, new)

idx.write_text(text, encoding='utf-8')
print('Fixed index.tsx')

# Fix practice.tsx games array
pr = pathlib.Path('artifacts/ola-arabic-mobile/app/(tabs)/practice.tsx')
text = pr.read_text(encoding='utf-8')

old_games = '''  const games = [
    { id: 'match', title: t('game_match'), subtitle: t('game_match_desc'), icon: Brain, color: '#8B5CF6', bg: '#EDE9FE' },
    { id: 'speed', title: t('game_speed'), subtitle: t('game_speed_desc'), icon: Zap, color: '#F59E0B', bg: '#FEF3C7' },
    { id: 'listen', title: t('game_listen'), subtitle: t('game_listen_desc'), icon: Ear, color: '#3B82F6', bg: '#DBEAFE' },
    { id: 'truefalse', title: t('game_truefalse'), subtitle: t('game_truefalse_desc'), icon: Target, color: '#10B981', bg: '#D1FAE5' },
    { id: 'spell', title: t('game_spell'), subtitle: t('game_spell_desc'), icon: Star, color: '#EC4899', bg: '#FCE7F3' },
  ];'''
new_games = '''  const games = [
    { id: 'match', title: t('game_match'), subtitle: t('game_match_desc'), icon: 'cpu', color: '#8B5CF6', bg: '#EDE9FE' },
    { id: 'speed', title: t('game_speed'), subtitle: t('game_speed_desc'), icon: 'zap', color: '#F59E0B', bg: '#FEF3C7' },
    { id: 'listen', title: t('game_listen'), subtitle: t('game_listen_desc'), icon: 'headphones', color: '#3B82F6', bg: '#DBEAFE' },
    { id: 'truefalse', title: t('game_truefalse'), subtitle: t('game_truefalse_desc'), icon: 'target', color: '#10B981', bg: '#D1FAE5' },
    { id: 'spell', title: t('game_spell'), subtitle: t('game_spell_desc'), icon: 'star', color: '#EC4899', bg: '#FCE7F3' },
  ];'''
text = text.replace(old_games, new_games)

# Replace <g.icon color={g.color} size={24} /> with Feather
old_render = '<g.icon color={g.color} size={24} />'
new_render = '<Feather name={g.icon as any} color={g.color} size={24} />'
text = text.replace(old_render, new_render)

pr.write_text(text, encoding='utf-8')
print('Fixed practice.tsx')
