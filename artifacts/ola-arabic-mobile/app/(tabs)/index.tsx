import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useListGrades } from '@workspace/api-client-react';
import { useI18n } from '@/i18n/context';
import { useColors } from '@/hooks/useColors';
import { getLocalizedText } from '@/lib/localize';
import { getProgress, type UserProgress } from '@/lib/progress';
import { getCurriculum, curriculumFlag, type CurriculumId } from '@/lib/curriculum';
import { Feather } from '@expo/vector-icons';

function iconFor(icon?: string) {
  if (icon === 'letters') return '🔤';
  if (icon === 'family') return '👨‍👩‍👧‍👦';
  if (icon === 'kitchen') return '🍽️';
  if (icon === 'book-open') return '📖';
  if (icon === 'sparkles') return '✨';
  return '📚';
}

export default function HomeScreen() {
  const colors = useColors();
  const { t, language } = useI18n();
  const router = useRouter();
  const [curriculum, setCurriculum] = useState<CurriculumId>('malaysia');
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    getCurriculum().then(setCurriculum);
  }, []);

  useEffect(() => {
    getProgress(curriculum).then(setProgress);
  }, [curriculum]);

  const {
    data: grades,
    isLoading: gradesLoading,
    error: gradesError,
    refetch: refetchGrades,
  } = useListGrades({ curriculum });

  const StatCard = ({
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
      </View>
      <View>
        <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{label}</Text>
        <Text style={[styles.statValue, { color: colors.foreground }]}>{value}</Text>
      </View>
    </View>
  );

  if (gradesLoading || !progress) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/icon.png')} style={styles.logo} />
        <Text style={[styles.title, { color: colors.foreground }]}>{t('appName')}</Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          {t('start_learning')}
        </Text>
      </View>

      <View style={styles.statsGrid}>
        <StatCard
          icon="star"
          label={t('xp')}
          value={String(progress.xp)}
          color={colors.primary}
          bg={colors.card}
        />
        <StatCard
          icon="trending-up"
          label={t('streak')}
          value={String(progress.streak)}
          color="#F59E0B"
          bg={colors.card}
        />
        <StatCard
          icon="target"
          label={t('completed')}
          value={String(progress.completedLessons.length)}
          color="#10B981"
          bg={colors.card}
        />
        <StatCard
          icon="award"
          label={t('badges')}
          value={String(progress.badges.length)}
          color="#8B5CF6"
          bg={colors.card}
        />
      </View>

      <TouchableOpacity
        style={[styles.curriculumBadge, { borderColor: colors.primary, backgroundColor: colors.primary + '10' }]}
        onPress={() => router.push('/select-curriculum')}
      >
        <Feather name="book-open" color={colors.primary} size={18} />
        <Text style={styles.flag}>{curriculumFlag(curriculum)}</Text>
        <Text style={[styles.switchText, { color: colors.mutedForeground }]}>
          · {t('switch_curriculum')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.startButton,
          { backgroundColor: colors.primary, borderColor: colors.primary },
        ]}
        onPress={() =>
          grades?.length
            ? router.push(`/grade/${grades[0].id}`)
            : router.push('/select-curriculum')
        }
        activeOpacity={0.8}
      >
        <Feather name="play" color="#fff" size={20} />
        <Text style={styles.startButtonText}>{t('start_learning')}</Text>
      </TouchableOpacity>

      {gradesError ? (
        <TouchableOpacity
          style={styles.errorBox}
          onPress={() => refetchGrades()}
          activeOpacity={0.8}
        >
          <Feather name="wifi-off" color={colors.mutedForeground} size={20} />
          <Text style={[styles.errorText, { color: colors.mutedForeground }]}>
            {t('load_error') || 'فشل تحميل الصفوف. اضغط لإعادة المحاولة.'}
          </Text>
          <View style={[styles.retryButton, { backgroundColor: colors.primary }]}>
            <Text style={[styles.retryText, { color: '#fff' }]}>
              {t('retry') || 'إعادة المحاولة'}
            </Text>
          </View>
        </TouchableOpacity>
      ) : gradesLoading ? (
        <View style={styles.errorBox}>
          <ActivityIndicator color={colors.primary} />
        </View>
      ) : null}

      <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
        {t('grades') || 'Grades'}
      </Text>

      <View style={styles.path}>
        {grades?.length ? (
          grades.map((grade) => {
            return (
              <View key={grade.id} style={styles.pathItem}>
                <View
                  style={[
                    styles.gradeIcon,
                    { backgroundColor: grade.color || colors.primary },
                  ]}
                >
                  <Text style={styles.iconText}>{iconFor(grade.icon)}</Text>
                </View>
                <TouchableOpacity
                  style={[
                    styles.gradeCard,
                    { backgroundColor: colors.card, borderColor: grade.color || colors.primary },
                  ]}
                  onPress={() => router.push(`/grade/${grade.id}`)}
                  activeOpacity={0.9}
                >
                  <Text
                    style={[styles.gradeTitle, { color: colors.foreground }]}
                    numberOfLines={2}
                  >
                    {getLocalizedText(grade.title, language)}
                  </Text>
                  <Text
                    style={[styles.gradeDesc, { color: colors.mutedForeground }]}
                    numberOfLines={2}
                  >
                    {getLocalizedText(grade.description, language)}
                  </Text>
                  <View style={styles.metaRow}>
                    <Text style={[styles.meta, { color: colors.mutedForeground }]}>
                      {grade.unitCount} {t('units')}
                    </Text>
                    <Text style={[styles.meta, { color: colors.mutedForeground }]}>
                      {grade.lessonCount} {t('lessons')}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <View style={styles.emptyBox}>
            <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
              {t('no_grades') || 'No grades available. Choose a curriculum.'}
            </Text>
            <TouchableOpacity
              style={[styles.retryButton, { backgroundColor: colors.primary + '20' }]}
              onPress={() => router.push('/select-curriculum')}
            >
              <Text style={[styles.retryText, { color: colors.primary }]}>
                {t('select_curriculum')}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { padding: 20, paddingTop: 60, alignItems: 'center' },
  logo: { width: 80, height: 80, borderRadius: 20, marginBottom: 12 },
  title: { fontSize: 28, fontFamily: 'Inter_700Bold', marginBottom: 4 },
  subtitle: { fontSize: 16, fontFamily: 'Inter_500Medium' },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    gap: 8,
    justifyContent: 'space-between',
  },
  statCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    width: '48%',
  },
  iconWrap: { width: 36, height: 36, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  statLabel: { fontSize: 12, fontFamily: 'Inter_600SemiBold', marginBottom: 2 },
  statValue: { fontSize: 20, fontFamily: 'Inter_700Bold' },
  curriculumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 8,
  },
  flag: { fontSize: 22 },
  switchText: { fontSize: 14, fontFamily: 'Inter_500Medium' },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center',
    marginTop: 28,
    marginBottom: 12,
  },
  path: { paddingHorizontal: 20, paddingBottom: 40, gap: 20 },
  pathItem: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  gradeIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#fff',
  },
  iconText: { fontSize: 26 },
  gradeCard: {
    flex: 1,
    borderRadius: 18,
    padding: 16,
    borderBottomWidth: 6,
  },
  gradeTitle: { fontSize: 18, fontFamily: 'Inter_700Bold', marginBottom: 4 },
  gradeDesc: { fontSize: 13, fontFamily: 'Inter_400Regular', marginBottom: 10 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between' },
  meta: { fontSize: 12, fontFamily: 'Inter_600SemiBold' },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    alignSelf: 'center',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 999,
    marginTop: 10,
    marginBottom: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
  },
  errorBox: {
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    gap: 10,
  },
  errorText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    textAlign: 'center',
  },
  retryButton: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 999,
  },
  retryText: { fontSize: 14, fontFamily: 'Inter_700Bold' },
  emptyBox: {
    padding: 20,
    alignItems: 'center',
    gap: 12,
  },
  emptyText: {
    fontSize: 15,
    fontFamily: 'Inter_500Medium',
    textAlign: 'center',
  },
});
