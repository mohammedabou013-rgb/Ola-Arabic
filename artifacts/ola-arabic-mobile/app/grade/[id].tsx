import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useGetGrade } from '@workspace/api-client-react';
import { useI18n } from '@/i18n/context';
import { useColors } from '@/hooks/useColors';
import { getLocalizedText } from '@/lib/localize';
import { getProgress } from '@/lib/progress';
import { getCurriculum, type CurriculumId } from '@/lib/curriculum';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const skillColors: Record<string, string> = {
  listening: '#3B82F6',
  speaking: '#F59E0B',
  reading: '#10B981',
  writing: '#EC4899',
};

function skillLabel(sk: string, t: (k: any) => string) {
  if (sk === 'listening') return t('listen') || 'Listen';
  if (sk === 'speaking') return t('say_this') || 'Speak';
  if (sk === 'reading') return t('dialogue') || 'Read';
  if (sk === 'writing') return t('vocabulary') || 'Write';
  return sk;
}

export default function GradeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const { t, language } = useI18n();
  const router = useRouter();
  const { data: grade, isLoading } = useGetGrade(id);
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    if (!grade) return;
    getCurriculum().then((curriculum: CurriculumId) => {
      getProgress(curriculum).then((p) => {
        setProgress(p.stars);
        setCompleted(p.completedLessons);
      });
    });
  }, [grade]);

  if (isLoading || !grade) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity style={styles.back} onPress={() => router.back()}>
        <Feather name="chevron-left" color={colors.primary} size={24} />
        <Text style={[styles.backText, { color: colors.primary }]}>{t('home')}</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={[styles.title, { color: grade.color || colors.primary }]}>
          {getLocalizedText(grade.title, language)}
        </Text>
        <Text style={[styles.desc, { color: colors.mutedForeground }]}>
          {getLocalizedText(grade.description, language)}
        </Text>
      </View>

      <View style={styles.content}>
        {grade.units?.map((unit, uIdx) => (
          <View key={unit.id} style={styles.unit}>
            <View style={styles.unitHeader}>
              <View
                style={[
                  styles.unitNumber,
                  { backgroundColor: grade.color || colors.primary },
                ]}
              >
                <Text style={styles.unitNumberText}>{uIdx + 1}</Text>
              </View>
              <Text style={[styles.unitTitle, { color: colors.foreground }]}>
                {getLocalizedText(unit.title, language)}
              </Text>
            </View>

            {unit.lessons?.map((lesson) => {
              const stars = progress[lesson.id] || 0;
              const isCompleted = completed.includes(lesson.id);
              return (
                <TouchableOpacity
                  key={lesson.id}
                  style={[
                    styles.lessonCard,
                    { backgroundColor: colors.card, borderColor: colors.border },
                    isCompleted && { backgroundColor: colors.primary + '10' },
                  ]}
                  onPress={() => router.push(`/lesson/${lesson.id}`)}
                  activeOpacity={0.9}
                >
                  <View style={styles.lessonRow}>
                    <Text
                      style={[styles.lessonTitle, { color: colors.foreground }]}
                      numberOfLines={2}
                    >
                      {getLocalizedText(lesson.title, language)}
                    </Text>
                    {isCompleted ? (
                      <View style={styles.stars}>
                        {[1, 2, 3].map((s) => (
                          <Feather name="star" key={s}
                            size={16}
                            color={s <= stars ? '#F59E0B' : colors.border}
                            fill={s <= stars ? '#F59E0B' : 'transparent'}
                          />
                        ))}
                      </View>
                    ) : (
                      <View style={[styles.play, { backgroundColor: colors.primary }]}>
                        <Feather name="play" color="#fff" size={14} fill="#fff" />
                      </View>
                    )}
                  </View>
                  <View style={styles.skills}>
                    {lesson.skills.map((sk) => (
                      <View
                        key={sk}
                        style={[
                          styles.skillBadge,
                          { backgroundColor: skillColors[sk] || colors.primary + '20' },
                        ]}
                      >
                        <Text style={[styles.skillText, { color: skillColors[sk] || colors.primary }]}>
                          {skillLabel(sk, t)}
                        </Text>
                      </View>
                    ))}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 8,
    gap: 4,
  },
  backText: { fontSize: 16, fontFamily: 'Inter_600SemiBold' },
  header: { padding: 20, alignItems: 'center' },
  title: { fontSize: 30, fontFamily: 'Inter_700Bold', textAlign: 'center' },
  desc: { fontSize: 15, fontFamily: 'Inter_500Medium', textAlign: 'center', marginTop: 8 },
  content: { padding: 16, paddingBottom: 40, gap: 28 },
  unit: { gap: 12 },
  unitHeader: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  unitNumber: {
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unitNumberText: { color: '#fff', fontSize: 18, fontFamily: 'Inter_700Bold' },
  unitTitle: { fontSize: 20, fontFamily: 'Inter_700Bold' },
  lessonCard: {
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderBottomWidth: 4,
  },
  lessonRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12 },
  lessonTitle: { flex: 1, fontSize: 17, fontFamily: 'Inter_700Bold' },
  stars: { flexDirection: 'row', gap: 2 },
  play: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skills: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 10 },
  skillBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  skillText: { fontSize: 11, fontFamily: 'Inter_600SemiBold' },
});
