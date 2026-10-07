import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { useRecipes } from '../context/RecipesContext';
import { useLang } from '../i18n';
import { COLORS } from '../theme';
import { confirmAction } from '../utils/dialogs';

export default function MyFoodScreen({ navigation }) {
  const { myRecipes, deleteRecipe } = useRecipes();
  const { t } = useLang();

  const handleDelete = (recipe) =>
    confirmAction(t.deleteTitle, t.deleteConfirm(recipe.name), t.delete, t.cancel, () => deleteRecipe(recipe.id));

  return (
    <View style={styles.container}>
      <Header title={t.myFood} onBack={navigation.goBack} />
      <FlatList
        data={myRecipes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.push('RecipeForm')}>
              <Ionicons name="add-circle" size={24} color={COLORS.primary} />
              <Text style={styles.addText}>{t.addNewRecipe}</Text>
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>
              {t.myRecipes} <Text style={styles.count}>({myRecipes.length})</Text>
            </Text>
          </>
        }
        ListEmptyComponent={<Text style={styles.empty}>{t.noMyRecipes}</Text>}
        renderItem={({ item }) => (
          <RecipeCard recipe={item} onPress={() => navigation.push('RecipeDetails', { recipeId: item.id })}>
            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.editButton]}
                onPress={() => navigation.push('RecipeForm', { recipeId: item.id })}>
                <Ionicons name="create-outline" size={18} color={COLORS.primary} />
                <Text style={[styles.actionText, styles.editText]}>{t.edit}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} onPress={() => handleDelete(item)}>
                <Ionicons name="trash-outline" size={18} color="#fff" />
                <Text style={styles.actionText}>{t.delete}</Text>
              </TouchableOpacity>
            </View>
          </RecipeCard>
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
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gold,
    borderRadius: 14,
    paddingVertical: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  addText: {
    color: COLORS.primary,
    fontSize: 17,
    fontWeight: '800',
    marginLeft: 8,
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
    marginTop: 30,
    paddingHorizontal: 20,
    fontSize: 15,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
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
});
