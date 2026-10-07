# Foodie Roma 🟡🔴

A React Native (Expo) recipe app with Roman and Italian dishes, styled in AS Roma's giallorosso colours.
The interface is in Russian by default and switches to English with the **EN / RU** button on the main screen.

## Run it

**Snack Expo:** open https://snack.expo.dev, choose **Import git repository**, paste the link to this repository and open the preview (Web, Android or iOS / Expo Go).

**Locally:**

```bash
npm install
npx expo start        # then scan the QR code with Expo Go, or press "w" for web
```

## Features

| Requirement | Where |
|---|---|
| Scrollable main feed with photo and name of every recipe | `src/screens/HomeScreen.js` |
| Horizontal category bar with 12 categories (+ All, Favorites, My Food) | `HomeScreen` |
| Tapping a category shows only recipes of that category | `HomeScreen` |
| Recipe details: photo, ingredients, step-by-step instructions, prep time, servings, calories, difficulty | `src/screens/RecipeDetailsScreen.js` |
| Heart toggle to add / remove a favorite | `RecipeDetailsScreen` (header heart and button) |
| Favorites section | `src/screens/FavoritesScreen.js` |
| My Food section with **Add New Recipe** | `src/screens/MyFoodScreen.js` |
| Add recipe form: name, image upload, ingredients, steps, **Save Recipe** | `src/screens/RecipeFormScreen.js` |
| Edit and Delete buttons on each of My Recipes | `MyFoodScreen`, `RecipeDetailsScreen` |
| Back button on every page (and Android hardware back) | `src/components/Header.js`, `App.js` |
| Favorites, own recipes and language are saved between launches | AsyncStorage, `src/context/RecipesContext.js` |

## Project structure

```
App.js                      stack navigation between screens
src/
  components/               Header (with Back), RecipeCard, LanguageToggle
  context/RecipesContext.js favorites and user recipes (AsyncStorage)
  data/recipes.js           12 categories and 33 recipes (RU + EN)
  data/images.js            links to dish photos in the "images" branch (from Wikimedia Commons)
  screens/                  Home, RecipeDetails, Favorites, MyFood, RecipeForm
  i18n.js                   Russian / English texts
  theme.js                  Roma colours
```

Photos are from Wikimedia Commons and are used under their free licenses.
