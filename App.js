import { useFonts } from 'expo-font';
import fonts from './src/global/fonts';
import Navigator from './src/navigation/Navigator';

export default function App() {

  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null
  }
  return (
    <Navigator />
  );
}


{/* <SafeAreaView style={styles.appContainer}>
      <StatusBar style='auto' />
      {productDetailId ? (<ItemDetail productDetailId={productDetailId} setProductDetailId={setProductDetailId} />) : categorySelected ? (<ItemListCategories setCategorySelected={setCategorySelected} category={categorySelected} setProductDetailId={setProductDetailId} />) : (
        <Home setCategorySelected={setCategorySelected} />)}
    </SafeAreaView> */}