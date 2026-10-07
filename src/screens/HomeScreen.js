import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';
import LanguageToggle from '../components/LanguageToggle';
import RecipeCard from '../components/RecipeCard';
import { useRecipes } from '../context/RecipesContext';
import { CATEGORIES } from '../data/recipes';
import { useLang } from '../i18n';
import { COLORS } from '../theme';

const ALL = 'all';

export default function HomeScreen({ navigation }) {
  const { allRecipes } = useRecipes();
  const { t, loc } = useLang();
  const [category, setCategory] = useState(ALL);

  const recipes = category === ALL ? allRecipes : allRecipes.filter((r) => r.category === category);
  const selected = CATEGORIES.find((c) => c.id === category);

  return (
    <View style={styles.container}>
      <Header
        title={t.appName}
        subtitle={t.tagline}
        // On the main feed "Back" leaves the selected category and returns to all recipes
        onBack={category !== ALL ? () => setCategory(ALL) : undefined}
        right={<LanguageToggle />}
      />

      <View style={styles.categoryBar}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryContent}>
          <Chip label={t.favorites} icon="heart" special onPress={() => navigation.push('Favorites')} />
          <Chip label={t.myFood} icon="restaurant" special onPress={() => navigation.push('MyFood')} />
          <Chip label={t.all} active={category === ALL} onPress={() => setCategory(ALL)} />
          {CATEGORIES.map((c) => (
            <Chip key={c.id} label={loc(c)} active={c.id === category} onPress={() => setCategory(c.id)} />
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>
            {selected ? loc(selected) : t.allRecipes} <Text style={styles.count}>({recipes.length})</Text>
          </Text>
        }
        ListEmptyComponent={<Text style={styles.empty}>{t.noRecipes}</Text>}
        renderItem={({ item }) => (
          <RecipeCard recipe={item} onPress={() => navigation.push('RecipeDetails', { recipeId: item.id })} />
        )}
      />
    </View>
  );
}

function Chip({ label, icon, active, special, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.chip, special && styles.chipSpecial, active && styles.chipActive]}>
      {icon && <Ionicons name={icon} size={15} color={COLORS.primary} style={styles.chipIcon} />}
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  categoryBar: {
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  categoryContent: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: 8,
  },
  chipSpecial: {
    backgroundColor: COLORS.gold,
    borderColor: COLORS.gold,
  },
  chipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  chipIcon: {
    marginRight: 5,
  },
  chipText: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  chipTextActive: {
    color: COLORS.gold,
  },
  list: {
    padding: 14,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 12,
  },
  count: {
    color: COLORS.muted,
    fontWeight: '600',
    fontSize: 16,
  },
  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 40,
  },
});
