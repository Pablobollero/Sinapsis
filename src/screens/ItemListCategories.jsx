import { FlatList, View } from "react-native";
import styles from "../../Styles";
import allProducts from '../data/products.json';
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useEffect, useState } from "react";

const ItemListCategories = ({navigation, route}) => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');

    const {category} = route.params;
    
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
            <Search onSearch={setKeyword} />
            <FlatList 
            data={products}
            renderItem={({item}) => <ProductItem product= {item} navigation={navigation} />}
            keyExtractor={(item) => item.id }/>
        </View>
    );
};

export default ItemListCategories;