import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import Header from '../components/Header';
import { RecipeImage } from '../components/RecipeCard';
import { useRecipes } from '../context/RecipesContext';
import { CATEGORIES } from '../data/recipes';
import { useLang } from '../i18n';
import { COLORS } from '../theme';
import { showMessage } from '../utils/dialogs';

const DIFFICULTIES = ['easy', 'medium', 'hard'];

const toLines = (text) =>
  text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

export default function RecipeFormScreen({ navigation, params }) {
  const { getRecipe, addRecipe, updateRecipe } = useRecipes();
  const { t, loc } = useLang();
  const editing = params.recipeId ? getRecipe(params.recipeId) : null;

  const [name, setName] = useState(editing?.name ?? '');
  const [image, setImage] = useState(editing?.image ?? null);
  const [category, setCategory] = useState(editing?.category ?? 'pasta');
  const [prepTime, setPrepTime] = useState(editing?.prepTime ? String(editing.prepTime) : '');
  const [servings, setServings] = useState(editing?.servings ? String(editing.servings) : '');
  const [calories, setCalories] = useState(editing?.calories ? String(editing.calories) : '');
  const [difficulty, setDifficulty] = useState(editing?.difficulty ?? 'easy');
  const [ingredients, setIngredients] = useState(editing ? editing.ingredients.join('\n') : '');
  const [steps, setSteps] = useState(editing ? editing.steps.join('\n') : '');

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      showMessage(t.error, t.permissionDenied);
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: Platform.OS === 'web',
    });
    if (!result.canceled && result.assets?.length) {
      const asset = result.assets[0];
      // On web a blob: URL dies after reload, so keep the picture itself as a data URI
      const uri =
        Platform.OS === 'web' && asset.base64 && !asset.uri.startsWith('data:')
          ? `data:${asset.mimeType || 'image/jpeg'};base64,${asset.base64}`
          : asset.uri;
      setImage(uri);
    }
  };

  const save = () => {
    const recipe = {
      name: name.trim(),
      image,
      category,
      prepTime: parseInt(prepTime, 10) || null,
      servings: parseInt(servings, 10) || null,
      calories: parseInt(calories, 10) || null,
      difficulty,
      ingredients: toLines(ingredients),
      steps: toLines(steps),
    };

    if (!recipe.name || recipe.ingredients.length === 0 || recipe.steps.length === 0) {
      showMessage(t.error, t.fillRequired);
      return;
    }

    if (editing) {
      updateRecipe(editing.id, recipe);
    } else {
      addRecipe(recipe);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header title={editing ? t.editRecipe : t.newRecipe} onBack={navigation.goBack} />

      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Label text={t.recipeName} required />
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder={t.recipeNamePh}
            placeholderTextColor={COLORS.muted}
          />

          <Label text={t.photo} />
          {image ? (
            <View>
              <RecipeImage uri={image} style={styles.preview} />
              <View style={styles.imageActions}>
                <TouchableOpacity style={styles.secondaryButton} onPress={pickImage}>
                  <Ionicons name="image-outline" size={18} color={COLORS.primary} />
                  <Text style={styles.secondaryText}>{t.changeImage}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryButton} onPress={() => setImage(null)}>
                  <Ionicons name="close-circle-outline" size={18} color={COLORS.danger} />
                  <Text style={[styles.secondaryText, { color: COLORS.danger }]}>{t.removeImage}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
              <Ionicons name="cloud-upload-outline" size={36} color={COLORS.primary} />
              <Text style={styles.uploadText}>{t.uploadImage}</Text>
            </TouchableOpacity>
          )}

          <Label text={t.category} />
          <View style={styles.chips}>
            {CATEGORIES.map((c) => (
              <Chip key={c.id} label={loc(c)} active={category === c.id} onPress={() => setCategory(c.id)} />
            ))}
          </View>

          <View style={styles.row}>
            <NumberField label={t.prepTimeMin} value={prepTime} onChange={setPrepTime} />
            <NumberField label={t.servings} value={servings} onChange={setServings} />
            <NumberField label={`${t.calories} (${t.kcal})`} value={calories} onChange={setCalories} last />
          </View>

          <Label text={t.difficulty} />
          <View style={styles.chips}>
            {DIFFICULTIES.map((d) => (
              <Chip key={d} label={t[d]} active={difficulty === d} onPress={() => setDifficulty(d)} />
            ))}
          </View>

          <Label text={t.ingredients} hint={t.ingredientsHint} required />
          <TextInput
            style={[styles.input, styles.multiline]}
            value={ingredients}
            onChangeText={setIngredients}
            placeholder={t.ingredientsPh}
            placeholderTextColor={COLORS.muted}
            multiline
            textAlignVertical="top"
          />

          <Label text={t.instructions} hint={t.stepsHint} required />
          <TextInput
            style={[styles.input, styles.multiline]}
            value={steps}
            onChangeText={setSteps}
            placeholder={t.stepsPh}
            placeholderTextColor={COLORS.muted}
            multiline
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.saveButton} onPress={save}>
            <Ionicons name="checkmark-circle" size={22} color={COLORS.gold} />
            <Text style={styles.saveText}>{t.saveRecipe}</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

function Label({ text, hint, required }) {
  return (
    <View style={styles.labelBox}>
      <Text style={styles.label}>
        {text}
        {required && <Text style={styles.required}> *</Text>}
      </Text>
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}
    </View>
  );
}

function NumberField({ label, value, onChange, last }) {
  return (
    <View style={[styles.numberField, !last && styles.numberFieldGap]}>
      <Label text={label} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChange(text.replace(/[^0-9]/g, ''))}
        keyboardType="number-pad"
        placeholder="0"
        placeholderTextColor={COLORS.muted}
      />
    </View>
  );
}

function Chip({ label, active, onPress }) {
  return (
    <TouchableOpacity style={[styles.chip, active && styles.chipActive]} onPress={onPress}>
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  flex: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 48,
  },
  labelBox: {
    marginTop: 16,
    marginBottom: 6,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primary,
  },
  required: {
    color: COLORS.danger,
  },
  hint: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 2,
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: COLORS.text,
  },
  multiline: {
    minHeight: 120,
  },
  uploadBox: {
    height: 150,
    borderRadius: 14,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: COLORS.gold,
    backgroundColor: COLORS.goldLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    marginTop: 6,
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 15,
  },
  preview: {
    width: '100%',
    height: 200,
    borderRadius: 14,
  },
  imageActions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
    paddingVertical: 4,
  },
  secondaryText: {
    marginLeft: 4,
    color: COLORS.primary,
    fontWeight: '600',
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.card,
    marginRight: 8,
    marginBottom: 8,
  },
  chipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  chipText: {
    color: COLORS.text,
    fontWeight: '600',
  },
  chipTextActive: {
    color: COLORS.gold,
  },
  row: {
    flexDirection: 'row',
  },
  numberField: {
    flex: 1,
  },
  numberFieldGap: {
    marginRight: 10,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: 16,
    marginTop: 28,
  },
  saveText: {
    color: COLORS.gold,
    fontSize: 17,
    fontWeight: '800',
    marginLeft: 8,
  },
});
