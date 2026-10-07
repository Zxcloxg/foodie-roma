import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useRecipes } from '../context/RecipesContext';
import { CATEGORIES } from '../data/recipes';
import { useLang } from '../i18n';
import { COLORS } from '../theme';

export function categoryName(id, loc) {
  const category = CATEGORIES.find((c) => c.id === id);
  return category ? loc(category) : id;
}

export function RecipeImage({ uri, style }) {
  if (!uri) {
    return (
      <View style={[style, styles.placeholder]}>
        <Ionicons name="restaurant" size={48} color={COLORS.gold} />
      </View>
    );
  }
  return <Image source={{ uri }} style={style} resizeMode="cover" />;
}

export default function RecipeCard({ recipe, onPress, children }) {
  const { isFavorite } = useRecipes();
  const { t, loc } = useLang();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <RecipeImage uri={recipe.image} style={styles.image} />
      <View style={styles.body}>
        <View style={styles.titleRow}>
          <Text style={styles.name} numberOfLines={2}>
            {loc(recipe.name)}
          </Text>
          {isFavorite(recipe.id) && <Ionicons name="heart" size={20} color={COLORS.heart} />}
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.badge}>{categoryName(recipe.category, loc)}</Text>
          {recipe.prepTime ? (
            <Text style={styles.meta}>
              <Ionicons name="time-outline" size={13} /> {recipe.prepTime} {t.min}
            </Text>
          ) : null}
          {recipe.isMine && <Text style={[styles.meta, styles.mine]}>{t.myRecipe}</Text>}
        </View>
        {children}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 190,
    backgroundColor: COLORS.border,
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  body: {
    padding: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginRight: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  badge: {
    backgroundColor: COLORS.goldLight,
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 10,
  },
  meta: {
    color: COLORS.muted,
    fontSize: 13,
    marginRight: 10,
  },
  mine: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});
