import { FlatList, Pressable, Text, View } from "react-native";
import styles from "../../Styles";
import allProducts from '../data/products.json';
import ItemDetail from "../components/ItemDetail";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';

const ItemListCategories = ({category, setCategorySelected}) => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');
    
    useEffect(() => {
        if(category) {
            const products = allProducts.filter((product) => product.category === category)
            const filteredProducts = products.filter((product) => product.title.includes(keyword)
            );
            setProducts(filteredProducts)
        }
    }, [category, keyword])
    
    return (
        <View style={styles.itemListCategoriesContainer}>
            <Pressable onPress={()=>setCategorySelected('')} style={styles.itemListCategoriesBackButton}>
                <AntDesign name="back" size={12} color="black" />
                <Text style={styles.backButtonText}>Volver</Text>
            </Pressable>
            <Search onSearch={setKeyword} />
            <FlatList 
            data={products}
            renderItem={({item}) => <ItemDetail product= {item} />}
            keyExtractor={(item) => item.id }/>
        </View>
    );
};

export default ItemListCategories;