import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './Styles';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style='auto'/>
      <ItemListCategories category='skincare' />
    </View>
  );
}