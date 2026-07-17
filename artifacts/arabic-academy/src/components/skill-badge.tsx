import React from 'react';
import { useI18n } from '@/i18n/context';

export function SkillBadge({ skill }: { skill: string }) {
  const { t } = useI18n();
  
  let color = 'bg-gray-100 text-gray-700 border-gray-200';
  let icon = '🎯';
  let label = skill;

  if (skill === 'listening' || skill === 'استماع') {
    color = 'bg-blue-100 text-blue-700 border-blue-200';
    icon = '🎧';
    label = t('listening');
  } else if (skill === 'speaking' || skill === 'تحدث') {
    color = 'bg-orange-100 text-orange-700 border-orange-200';
    icon = '🗣️';
    label = t('speaking');
  } else if (skill === 'reading' || skill === 'قراءة') {
    color = 'bg-green-100 text-green-700 border-green-200';
    icon = '📖';
    label = t('reading');
  } else if (skill === 'writing' || skill === 'كتابة') {
    color = 'bg-purple-100 text-purple-700 border-purple-200';
    icon = '✍️';
    label = t('writing');
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border-2 ${color}`}>
      <span>{icon}</span>
      <span>{label}</span>
    </span>
  );
}
