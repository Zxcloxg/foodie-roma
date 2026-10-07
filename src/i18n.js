import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANG_KEY = 'foodie:lang';

const STRINGS = {
  ru: {
    appName: 'Foodie Roma',
    tagline: 'Вкус Вечного города',
    back: 'Назад',
    all: 'Все',
    favorites: 'Избранное',
    myFood: 'Моя еда',
    allRecipes: 'Все рецепты',
    recipesIn: (c) => `${c}`,
    noRecipes: 'В этой категории пока нет рецептов.',
    recipeDetails: 'Рецепт',
    prepTime: 'Время',
    servings: 'Порции',
    calories: 'Калории',
    difficulty: 'Сложность',
    min: 'мин',
    kcal: 'ккал',
    easy: 'Легко',
    medium: 'Средне',
    hard: 'Сложно',
    ingredients: 'Ингредиенты',
    instructions: 'Инструкции',
    addFavorite: 'В избранное',
    inFavorites: 'В избранном',
    favoritesTitle: 'Избранные рецепты',
    noFavorites: 'Здесь пока пусто. Откройте рецепт и нажмите на сердечко, чтобы сохранить его.',
    addNewRecipe: 'Добавить новый рецепт',
    myRecipes: 'Мои рецепты',
    noMyRecipes: 'Вы ещё не добавили ни одного рецепта. Нажмите «Добавить новый рецепт».',
    myRecipe: 'Мой рецепт',
    edit: 'Редактировать',
    delete: 'Удалить',
    deleteTitle: 'Удалить рецепт',
    deleteConfirm: (n) => `Удалить «${n}»?`,
    cancel: 'Отмена',
    notFound: 'Этот рецепт больше не существует.',
    newRecipe: 'Новый рецепт',
    editRecipe: 'Редактирование',
    recipeName: 'Название рецепта',
    recipeNamePh: 'Например, паста алла норма',
    photo: 'Фото блюда',
    uploadImage: 'Загрузить изображение',
    changeImage: 'Сменить фото',
    removeImage: 'Убрать',
    category: 'Категория',
    ingredientsHint: 'Каждый ингредиент с новой строки',
    ingredientsPh: '400 г спагетти\n2 зубчика чеснока\n...',
    stepsHint: 'Каждый шаг с новой строки',
    stepsPh: 'Отварите пасту\nОбжарьте чеснок\n...',
    prepTimeMin: 'Время (мин)',
    saveRecipe: 'Сохранить рецепт',
    saved: 'Рецепт сохранён',
    error: 'Ошибка',
    fillRequired: 'Заполните название, ингредиенты и шаги приготовления.',
    permissionDenied: 'Нет доступа к галерее. Разрешите доступ в настройках.',
    language: 'EN',
  },
  en: {
    appName: 'Foodie Roma',
    tagline: 'A taste of the Eternal City',
    back: 'Back',
    all: 'All',
    favorites: 'Favorites',
    myFood: 'My Food',
    allRecipes: 'All recipes',
    recipesIn: (c) => `${c}`,
    noRecipes: 'No recipes in this category yet.',
    recipeDetails: 'Recipe Details',
    prepTime: 'Prep time',
    servings: 'Servings',
    calories: 'Calories',
    difficulty: 'Difficulty',
    min: 'min',
    kcal: 'kcal',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    ingredients: 'Ingredients',
    instructions: 'Instructions',
    addFavorite: 'Favorite',
    inFavorites: 'Favorited',
    favoritesTitle: 'Your favorite recipes',
    noFavorites: 'Nothing here yet. Open any recipe and tap the heart to save it.',
    addNewRecipe: 'Add New Recipe',
    myRecipes: 'My Recipes',
    noMyRecipes: 'You haven’t added any recipes yet. Tap “Add New Recipe”.',
    myRecipe: 'My recipe',
    edit: 'Edit',
    delete: 'Delete',
    deleteTitle: 'Delete recipe',
    deleteConfirm: (n) => `Delete “${n}”?`,
    cancel: 'Cancel',
    notFound: 'This recipe no longer exists.',
    newRecipe: 'New Recipe',
    editRecipe: 'Edit Recipe',
    recipeName: 'Recipe name',
    recipeNamePh: 'e.g. Pasta alla Norma',
    photo: 'Dish photo',
    uploadImage: 'Upload Image',
    changeImage: 'Change photo',
    removeImage: 'Remove',
    category: 'Category',
    ingredientsHint: 'One ingredient per line',
    ingredientsPh: '400 g spaghetti\n2 garlic cloves\n...',
    stepsHint: 'One step per line',
    stepsPh: 'Boil the pasta\nFry the garlic\n...',
    prepTimeMin: 'Time (min)',
    saveRecipe: 'Save Recipe',
    saved: 'Recipe saved',
    error: 'Error',
    fillRequired: 'Please fill in the name, ingredients and steps.',
    permissionDenied: 'No access to the photo library. Please allow it in settings.',
    language: 'RU',
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ru');

  useEffect(() => {
    AsyncStorage.getItem(LANG_KEY)
      .then((saved) => saved && setLang(saved))
      .catch(() => {});
  }, []);

  const value = useMemo(
    () => ({
      lang,
      t: STRINGS[lang],
      toggleLang: () => {
        const next = lang === 'ru' ? 'en' : 'ru';
        setLang(next);
        AsyncStorage.setItem(LANG_KEY, next).catch(() => {});
      },
      // Built-in recipes store { ru, en } objects; user recipes store plain values
      loc: (value) =>
        value && typeof value === 'object' && !Array.isArray(value) ? value[lang] ?? value.en : value,
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
