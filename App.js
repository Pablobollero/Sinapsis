import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './Styles';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import fonts from './src/global/fonts';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('');
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null
  }
  return (
    <View style={styles.appContainer}>
      <StatusBar style='auto'/>
      {categorySelected ? ( <ItemListCategories setCategorySelected={setCategorySelected} category={categorySelected}/>) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </View>
  );
}