import { FlatList, Pressable, Text, View } from "react-native";
import styles from "../../Styles";
import allProducts from '../data/products.json';
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';

const ItemListCategories = ({category, setCategorySelected, setProductDetailId}) => {
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
        <View style={styles.itemContainer}>
            <Pressable onPress={()=>setCategorySelected('')} style={styles.itemListCategoriesBackButton}>
                <AntDesign name="back" size={12} color="black" />
                <Text style={styles.backButtonText}>Volver</Text>
            </Pressable>
            <Search onSearch={setKeyword} />
            <FlatList 
            data={products}
            renderItem={({item}) => <ProductItem product= {item} setProductDetailId={setProductDetailId} />}
            keyExtractor={(item) => item.id }/>
        </View>
    );
};

export default ItemListCategories;