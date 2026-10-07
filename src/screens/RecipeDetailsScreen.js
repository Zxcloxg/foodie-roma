import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';
import { RecipeImage, categoryName } from '../components/RecipeCard';
import { useRecipes } from '../context/RecipesContext';
import { useLang } from '../i18n';
import { COLORS } from '../theme';
import { confirmAction } from '../utils/dialogs';

export default function RecipeDetailsScreen({ navigation, params }) {
  const { getRecipe, isFavorite, toggleFavorite, deleteRecipe } = useRecipes();
  const { t, loc } = useLang();
  const recipe = getRecipe(params.recipeId);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Header title={t.recipeDetails} onBack={navigation.goBack} />
        <Text style={styles.empty}>{t.notFound}</Text>
      </View>
    );
  }

  const favorite = isFavorite(recipe.id);

  const heartButton = (
    <TouchableOpacity
      onPress={() => toggleFavorite(recipe.id)}
      accessibilityRole="button"
      accessibilityLabel={favorite ? t.inFavorites : t.addFavorite}
      hitSlop={10}>
      <Ionicons name={favorite ? 'heart' : 'heart-outline'} size={28} color={COLORS.gold} />
    </TouchableOpacity>
  );

  const handleDelete = () =>
    confirmAction(t.deleteTitle, t.deleteConfirm(loc(recipe.name)), t.delete, t.cancel, () => {
      deleteRecipe(recipe.id);
      navigation.goBack();
    });

  return (
    <View style={styles.container}>
      <Header title={t.recipeDetails} onBack={navigation.goBack} right={heartButton} />

      <ScrollView contentContainerStyle={styles.content}>
        <RecipeImage uri={recipe.image} style={styles.image} />

        <View style={styles.section}>
          <Text style={styles.category}>{categoryName(recipe.category, loc)}</Text>
          <View style={styles.titleRow}>
            <Text style={styles.name}>{loc(recipe.name)}</Text>
            <TouchableOpacity
              style={[styles.favButton, favorite && styles.favButtonActive]}
              onPress={() => toggleFavorite(recipe.id)}>
              <Ionicons
                name={favorite ? 'heart' : 'heart-outline'}
                size={20}
                color={favorite ? '#fff' : COLORS.heart}
              />
              <Text style={[styles.favText, favorite && styles.favTextActive]}>
                {favorite ? t.inFavorites : t.addFavorite}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoGrid}>
            <Info
              icon="time-outline"
              label={t.prepTime}
              value={recipe.prepTime ? `${recipe.prepTime} ${t.min}` : '—'}
            />
            <Info icon="people-outline" label={t.servings} value={recipe.servings || '—'} />
            <Info
              icon="flame-outline"
              label={t.calories}
              value={recipe.calories ? `${recipe.calories} ${t.kcal}` : '—'}
            />
            <Info icon="speedometer-outline" label={t.difficulty} value={t[recipe.difficulty] || '—'} />
          </View>

          {recipe.isMine && (
            <View style={styles.ownerActions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.editButton]}
                onPress={() => navigation.push('RecipeForm', { recipeId: recipe.id })}>
                <Ionicons name="create-outline" size={18} color={COLORS.primary} />
                <Text style={[styles.actionText, styles.editText]}>{t.edit}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} onPress={handleDelete}>
                <Ionicons name="trash-outline" size={18} color="#fff" />
                <Text style={styles.actionText}>{t.delete}</Text>
              </TouchableOpacity>
            </View>
          )}

          <Text style={styles.heading}>{t.ingredients}</Text>
          {loc(recipe.ingredients).map((ingredient, i) => (
            <View key={i} style={styles.ingredientRow}>
              <View style={styles.bullet} />
              <Text style={styles.text}>{ingredient}</Text>
            </View>
          ))}

          <Text style={styles.heading}>{t.instructions}</Text>
          {loc(recipe.steps).map((step, i) => (
            <View key={i} style={styles.stepRow}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{i + 1}</Text>
              </View>
              <Text style={[styles.text, styles.stepText]}>{step}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function Info({ icon, label, value }) {
  return (
    <View style={styles.infoItem}>
      <Ionicons name={icon} size={22} color={COLORS.gold} />
      <Text style={styles.infoValue}>{value}</Text>
      <Text style={styles.infoLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingBottom: 40,
  },
  image: {
    width: '100%',
    height: 260,
    backgroundColor: COLORS.border,
  },
  section: {
    padding: 16,
  },
  category: {
    color: COLORS.primary,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 12,
    marginBottom: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontSize: 25,
    fontWeight: '800',
    color: COLORS.text,
    marginRight: 10,
  },
  favButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.heart,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  favButtonActive: {
    backgroundColor: COLORS.heart,
  },
  favText: {
    marginLeft: 5,
    color: COLORS.heart,
    fontWeight: '700',
  },
  favTextActive: {
    color: '#fff',
  },
  infoGrid: {
    flexDirection: 'row',
    marginTop: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 14,
  },
  infoItem: {
    flex: 1,
    alignItems: 'center',
  },
  infoValue: {
    marginTop: 4,
    fontWeight: '800',
    color: '#fff',
  },
  infoLabel: {
    fontSize: 12,
    color: '#F6DDE0',
  },
  ownerActions: {
    flexDirection: 'row',
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    borderRadius: 12,
  },
  editButton: {
    backgroundColor: COLORS.gold,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: COLORS.danger,
  },
  actionText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 6,
  },
  editText: {
    color: COLORS.primary,
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.primary,
    marginTop: 24,
    marginBottom: 10,
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.gold,
    marginRight: 10,
  },
  text: {
    fontSize: 15,
    color: COLORS.text,
    lineHeight: 22,
    flexShrink: 1,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  stepNumber: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 1,
  },
  stepNumberText: {
    color: COLORS.gold,
    fontWeight: '800',
  },
  stepText: {
    flex: 1,
  },
  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 40,
  },
});
