import { useFonts } from 'expo-font';
import fonts from './src/global/fonts';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Styles';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {

  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null
  }
  return (
    <TabNavigator  style={styles.appContainer}>
      <SafeAreaView>
        <StatusBar style='auto' />
      </SafeAreaView>
    </TabNavigator>
  );
}


