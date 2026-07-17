import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useI18n, type Language } from '@/i18n/context';
import { useColors } from '@/hooks/useColors';
import { getProgress, type UserProgress } from '@/lib/progress';
import { getCurriculum, curriculumFlag, type CurriculumId } from '@/lib/curriculum';
import { Feather } from '@expo/vector-icons';

const languages: { id: Language; label: string }[] = [
  { id: 'ar', label: 'العربية' },
  { id: 'en', label: 'English' },
  { id: 'ms', label: 'Bahasa Melayu' },
  { id: 'id', label: 'Bahasa Indonesia' },
];

export default function ProfileScreen() {
  const colors = useColors();
  const { language, setLanguage, t } = useI18n();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [curriculum, setCurriculum] = useState<CurriculumId>('malaysia');

  useEffect(() => {
    getCurriculum().then((curriculum) => {
      setCurriculum(curriculum);
      getProgress(curriculum).then(setProgress);
    });
  }, []);

  if (!progress) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Text style={[styles.headerTitle, { color: colors.primaryForeground }]}>
          {t('appName')}
        </Text>
        <Text style={[styles.headerSubtitle, { color: colors.primaryForeground + 'cc' }]}
          numberOfLines={2}>
          {curriculumFlag(curriculum)} {t('select_curriculum')}
        </Text>
      </View>

      <View style={styles.statsGrid}>
        <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Feather name="star" color={colors.primary} size={28} fill={colors.primary} />
          <Text style={[styles.statValue, { color: colors.foreground }]}>{progress.xp}</Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{t('xp')}</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Feather name="trending-up" color="#F59E0B" size={28} fill="#F59E0B" />
          <Text style={[styles.statValue, { color: colors.foreground }]}>{progress.streak}</Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{t('streak')}</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Feather name="target" color="#10B981" size={28} />
          <Text style={[styles.statValue, { color: colors.foreground }]}>
            {progress.completedLessons.length}
          </Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{t('completed')}</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Feather name="award" color="#8B5CF6" size={28} fill="#8B5CF6" />
          <Text style={[styles.statValue, { color: colors.foreground }]}>{progress.badges.length}</Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{t('badges')}</Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Language / Bahasa</Text>
      <View style={styles.options}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.id}
            style={[
              styles.langCard,
              { backgroundColor: colors.card, borderColor: colors.border },
              language === lang.id && { borderColor: colors.primary, backgroundColor: colors.primary + '10' },
            ]}
            onPress={() => setLanguage(lang.id)}
          >
            <Text style={[styles.langLabel, { color: colors.foreground }]}>{lang.label}</Text>
            {language === lang.id && (
              <View style={[styles.check, { backgroundColor: colors.primary }]} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { padding: 24, paddingTop: 80, alignItems: 'center' },
  headerTitle: { fontSize: 28, fontFamily: 'Inter_700Bold' },
  headerSubtitle: { fontSize: 16, fontFamily: 'Inter_500Medium', marginTop: 6 },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 12,
    justifyContent: 'space-between',
  },
  statBox: {
    width: '47%',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderBottomWidth: 4,
  },
  statValue: { fontSize: 26, fontFamily: 'Inter_700Bold', marginTop: 8 },
  statLabel: { fontSize: 12, fontFamily: 'Inter_600SemiBold', marginTop: 2 },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    marginTop: 24,
    marginHorizontal: 20,
    marginBottom: 12,
  },
  options: { paddingHorizontal: 20, paddingBottom: 40, gap: 10 },
  langCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  langLabel: { fontSize: 16, fontFamily: 'Inter_600SemiBold' },
  check: { width: 14, height: 14, borderRadius: 7 },
});
