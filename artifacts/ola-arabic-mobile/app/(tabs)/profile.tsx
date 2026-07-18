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

const languages: { id: Language; label: string; nativeLabel: string }[] = [
  { id: 'ar', label: 'العربية', nativeLabel: '🇸🇦 العربية' },
  { id: 'en', label: 'English', nativeLabel: '🇬🇧 English' },
  { id: 'ms', label: 'Bahasa Melayu', nativeLabel: '🇲🇾 Bahasa Melayu' },
  { id: 'id', label: 'Bahasa Indonesia', nativeLabel: '🇮🇩 Bahasa Indonesia' },
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
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Text style={[styles.headerTitle, { color: colors.primaryForeground }]}>
          {t('appName')}
        </Text>
        <Text
          style={[styles.headerSubtitle, { color: colors.primaryForeground + 'cc' }]}
          numberOfLines={2}
        >
          {curriculumFlag(curriculum)} {t('select_curriculum')}
        </Text>
      </View>

      {/* Stats — compact row */}
      <View style={styles.statsRow}>
        <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Feather name="star" color={colors.primary} size={22} />
          <Text style={[styles.statValue, { color: colors.foreground }]}>{progress.xp}</Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{t('xp')}</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Feather name="trending-up" color="#F59E0B" size={22} />
          <Text style={[styles.statValue, { color: colors.foreground }]}>{progress.streak}</Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{t('streak')}</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Feather name="target" color="#10B981" size={22} />
          <Text style={[styles.statValue, { color: colors.foreground }]}>
            {progress.completedLessons.length}
          </Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{t('completed')}</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Feather name="award" color="#8B5CF6" size={22} />
          <Text style={[styles.statValue, { color: colors.foreground }]}>{progress.badges.length}</Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{t('badges')}</Text>
        </View>
      </View>

      {/* Language selector */}
      <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Language / Bahasa / اللغة</Text>
      <View style={styles.langGrid}>
        {languages.map((lang) => {
          const isSelected = language === lang.id;
          return (
            <TouchableOpacity
              key={lang.id}
              style={[
                styles.langCard,
                { backgroundColor: colors.card, borderColor: colors.border },
                isSelected && { borderColor: colors.primary, backgroundColor: colors.primary + '15' },
              ]}
              onPress={() => setLanguage(lang.id)}
              activeOpacity={0.8}
            >
              <Text style={[styles.langLabel, { color: isSelected ? colors.primary : colors.foreground }]}>
                {lang.nativeLabel}
              </Text>
              {isSelected && (
                <Feather name="check-circle" color={colors.primary} size={20} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { padding: 24, paddingTop: 70, alignItems: 'center' },
  headerTitle: { fontSize: 24, fontFamily: 'Inter_700Bold' },
  headerSubtitle: { fontSize: 14, fontFamily: 'Inter_500Medium', marginTop: 4 },

  // Stats in a single compact row
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 14,
    gap: 8,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 14,
    borderWidth: 1,
    borderBottomWidth: 3,
    gap: 4,
  },
  statValue: { fontSize: 20, fontFamily: 'Inter_700Bold' },
  statLabel: { fontSize: 10, fontFamily: 'Inter_600SemiBold', textAlign: 'center' },

  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    marginTop: 20,
    marginHorizontal: 16,
    marginBottom: 10,
  },

  // 2-column grid so all 4 languages fit on screen at once
  langGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    gap: 10,
  },
  langCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    borderWidth: 2,
    width: '47.5%',
  },
  langLabel: { fontSize: 14, fontFamily: 'Inter_600SemiBold', flex: 1 },
});
