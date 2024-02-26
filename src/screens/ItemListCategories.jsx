import { FlatList, View, Pressable, Text } from "react-native";
import styles from "../../Styles";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AntDesign } from '@expo/vector-icons';

const ItemListCategories = ({navigation}) => {
    const productsFilteredByCategory = useSelector((state) => state.shopReducer.value.productsFilteredByCategory);
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');

    
    useEffect(() => {
        const productsFiltered = productsFilteredByCategory.filter((product)=> product.title.includes(keyword))
        setProducts(productsFiltered)
    }, [productsFilteredByCategory, keyword]);
    
    return (
        <View style={styles.itemContainer}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton} >
                <AntDesign name="back" size={12} color="black" />
                <Text style={styles.backButtonText}>Volver</Text>
            </Pressable>
            <Search onSearch={setKeyword} />
            <FlatList 
            data={products}
            renderItem={({item}) => <ProductItem product= {item} navigation={navigation} />}
            keyExtractor={(item) => item.id }/>
        </View>
    );
};

export default ItemListCategories;