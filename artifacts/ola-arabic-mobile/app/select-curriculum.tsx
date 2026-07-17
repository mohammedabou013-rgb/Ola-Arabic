import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useI18n } from '@/i18n/context';
import { useColors } from '@/hooks/useColors';
import { setCurriculum, type CurriculumId } from '@/lib/curriculum';

type Choice = { id: CurriculumId; flag: string; labelKey: 'malaysia' | 'uae' | 'indonesia' };

const choices: Choice[] = [
  { id: 'malaysia', flag: '🇲🇾', labelKey: 'malaysia' },
  { id: 'uae', flag: '🇦🇪', labelKey: 'uae' },
  { id: 'indonesia', flag: '🇮🇩', labelKey: 'indonesia' },
];

export default function SelectCurriculumScreen() {
  const colors = useColors();
  const { t } = useI18n();
  const router = useRouter();

  const select = async (id: CurriculumId) => {
    await setCurriculum(id);
    router.replace('/');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.foreground }]}>{t('select_curriculum')}</Text>
      </View>
      <View style={styles.options}>
        {choices.map((c) => (
          <TouchableOpacity
            key={c.id}
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
            onPress={() => select(c.id)}
            activeOpacity={0.8}
          >
            <Text style={styles.flag}>{c.flag}</Text>
            <Text style={[styles.label, { color: colors.foreground }]}>{t(c.labelKey)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 24, paddingTop: 60, alignItems: 'center' },
  title: { fontSize: 24, fontFamily: 'Inter_700Bold' },
  options: { padding: 20, gap: 16 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderBottomWidth: 5,
  },
  flag: { fontSize: 36 },
  label: { fontSize: 20, fontFamily: 'Inter_700Bold' },
});
