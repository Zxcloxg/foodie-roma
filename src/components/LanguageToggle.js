import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useLang } from '../i18n';
import { COLORS } from '../theme';

export default function LanguageToggle() {
  const { t, toggleLang } = useLang();

  return (
    <TouchableOpacity style={styles.button} onPress={toggleLang} accessibilityRole="button">
      <Text style={styles.text}>{t.language}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  text: {
    color: COLORS.gold,
    fontWeight: '800',
    fontSize: 13,
  },
});
