import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { RecipesProvider } from './src/context/RecipesContext';
import { LanguageProvider } from './src/i18n';
import FavoritesScreen from './src/screens/FavoritesScreen';
import HomeScreen from './src/screens/HomeScreen';
import MyFoodScreen from './src/screens/MyFoodScreen';
import RecipeDetailsScreen from './src/screens/RecipeDetailsScreen';
import RecipeFormScreen from './src/screens/RecipeFormScreen';
import { COLORS } from './src/theme';

const SCREENS = {
  Home: HomeScreen,
  RecipeDetails: RecipeDetailsScreen,
  Favorites: FavoritesScreen,
  MyFood: MyFoodScreen,
  RecipeForm: RecipeFormScreen,
};

// A small stack navigator: every screen gets navigation.push / navigation.goBack
export default function App() {
  const [stack, setStack] = useState([{ name: 'Home', params: {} }]);

  const push = useCallback((name, params = {}) => setStack((s) => [...s, { name, params }]), []);
  const goBack = useCallback(() => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s)), []);
  const navigation = useMemo(() => ({ push, goBack }), [push, goBack]);

  // Android hardware back button
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (stack.length > 1) {
        goBack();
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [stack.length, goBack]);

  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <RecipesProvider>
          <SafeAreaView style={styles.safe} edges={['top']}>
            <StatusBar style="light" />
            {/* Lower screens stay mounted (hidden) so the feed keeps its category and scroll position */}
            {stack.map((route, index) => {
              const Screen = SCREENS[route.name];
              const isTop = index === stack.length - 1;
              return (
                <View key={index + route.name} style={[styles.screen, !isTop && styles.hidden]}>
                  <Screen navigation={navigation} params={route.params} />
                </View>
              );
            })}
          </SafeAreaView>
        </RecipesProvider>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  hidden: {
    display: 'none',
  },
});
