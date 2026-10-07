import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useLang } from '../i18n';
import { COLORS } from '../theme';

export default function Header({ title, subtitle, onBack, right }) {
  const { t } = useLang();

  return (
    <View style={styles.header}>
      <View style={styles.row}>
        {onBack ? (
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBack}
            accessibilityRole="button"
            accessibilityLabel={t.back}>
            <Ionicons name="chevron-back" size={22} color={COLORS.gold} />
            <Text style={styles.backText}>{t.back}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.side} />
        )}
        <View style={styles.center}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
        <View style={[styles.side, styles.right]}>{right}</View>
      </View>
      {/* Thin gold stripe, like on the Roma shirt */}
      <View style={styles.stripe} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    minHeight: 56,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
    paddingVertical: 4,
  },
  backText: {
    color: COLORS.gold,
    fontSize: 16,
    fontWeight: '600',
  },
  side: {
    width: 90,
  },
  right: {
    alignItems: 'flex-end',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: '800',
    color: COLORS.gold,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 12,
    color: '#F6DDE0',
    marginTop: 1,
  },
  stripe: {
    height: 4,
    backgroundColor: COLORS.gold,
  },
});
