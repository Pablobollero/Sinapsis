import { FlatList, View } from "react-native";
import styles from "../../Styles";
import allProducts from '../data/products.json';
import ItemDetail from "../components/ItemDetail";
import Search from "../components/Search";
import { useEffect, useState } from "react";

const ItemListCategories = ({category}) => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');
    
    useEffect(() => {
        if(category) {
            const products = allProducts.filter((product) => product.category === category)
            const filteredProducts = products.filter((product) => product.title.includes(keyword)
            );
            setProducts(filteredProducts)
        }
    }, [])
    
    return (
        <View style={styles.itemListCategoriesContainer}>
            <Search onSearch={setKeyword} />
            <FlatList 
            data={products}
            renderItem={({item}) => <ItemDetail product= {item} />}
            keyExtractor={(item) => item.id }/>
        </View>
    );
};

export default ItemListCategories;