import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { useRecipes } from '../context/RecipesContext';
import { useLang } from '../i18n';
import { COLORS } from '../theme';

export default function FavoritesScreen({ navigation }) {
  const { favorites, getRecipe } = useRecipes();
  const { t } = useLang();
  const recipes = favorites.map(getRecipe).filter(Boolean);

  return (
    <View style={styles.container}>
      <Header title={t.favorites} onBack={navigation.goBack} />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          recipes.length > 0 && (
            <Text style={styles.sectionTitle}>
              {t.favoritesTitle} <Text style={styles.count}>({recipes.length})</Text>
            </Text>
          )
        }
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Ionicons name="heart-outline" size={52} color={COLORS.primary} />
            <Text style={styles.empty}>{t.noFavorites}</Text>
          </View>
        }
        renderItem={({ item }) => (
          <RecipeCard recipe={item} onPress={() => navigation.push('RecipeDetails', { recipeId: item.id })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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
  emptyBox: {
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 30,
  },
  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 12,
    fontSize: 15,
  },
});
