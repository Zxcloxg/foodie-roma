import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RECIPES } from '../data/recipes';

const FAVORITES_KEY = 'foodie:favorites';
const MY_RECIPES_KEY = 'foodie:myRecipes';

const RecipesContext = createContext(null);

export function RecipesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load saved data once on start
  useEffect(() => {
    (async () => {
      try {
        const [fav, mine] = await Promise.all([
          AsyncStorage.getItem(FAVORITES_KEY),
          AsyncStorage.getItem(MY_RECIPES_KEY),
        ]);
        if (fav) setFavorites(JSON.parse(fav));
        if (mine) setMyRecipes(JSON.parse(mine));
      } catch (e) {
        console.warn('Could not load saved data', e);
      }
      setLoaded(true);
    })();
  }, []);

  // Persist changes
  useEffect(() => {
    if (loaded) AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites)).catch(() => {});
  }, [favorites, loaded]);

  useEffect(() => {
    if (loaded) AsyncStorage.setItem(MY_RECIPES_KEY, JSON.stringify(myRecipes)).catch(() => {});
  }, [myRecipes, loaded]);

  const value = useMemo(() => {
    // Feed shows recipes of all users: the user's own recipes first, then the shared ones
    const allRecipes = [...myRecipes, ...RECIPES];

    return {
      allRecipes,
      myRecipes,
      favorites,
      getRecipe: (id) => allRecipes.find((r) => r.id === id),
      isFavorite: (id) => favorites.includes(id),
      toggleFavorite: (id) =>
        setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id])),
      addRecipe: (recipe) => {
        const newRecipe = { ...recipe, id: 'my-' + Date.now(), isMine: true };
        setMyRecipes((prev) => [newRecipe, ...prev]);
        return newRecipe;
      },
      updateRecipe: (id, changes) =>
        setMyRecipes((prev) => prev.map((r) => (r.id === id ? { ...r, ...changes } : r))),
      deleteRecipe: (id) => {
        setMyRecipes((prev) => prev.filter((r) => r.id !== id));
        setFavorites((prev) => prev.filter((f) => f !== id));
      },
    };
  }, [myRecipes, favorites]);

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
}

export function useRecipes() {
  return useContext(RecipesContext);
}
