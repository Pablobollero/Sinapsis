import { FlatList, View, Pressable, Text } from "react-native";
import styles from "../../Styles";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AntDesign } from '@expo/vector-icons';
import { useGetProductsByCategoryQuery } from "../services/shopService";

const ItemListCategories = ({navigation}) => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");

    //Filtrado en DB para guardar la categoria seleccionada en la const category.
    const category = useSelector((state)=> state.shopReducer.value.categorySelected);
    //Hook que filtra las categorias y nos devuelve la requerida almacenada en la const category de la linea 15
    const {data: productsFilteredByCategory, isLoading, error} = useGetProductsByCategoryQuery(category)
    
    useEffect(() => {
        console.log(productsFilteredByCategory);
        if (productsFilteredByCategory) {
            const productsRaw = Object.values(productsFilteredByCategory)
            const productsFiltered = productsRaw.filter((product) =>
                product.title.includes(keyword)
            );
            setProducts(productsFiltered);
        }
    }, [productsFilteredByCategory, keyword]);
    
    return (
        <View style={styles.itemContainer}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton} >
                <AntDesign name="back" size={12} color="black"/>
                <Text style={styles.backButtonText}>Volver</Text>
            </Pressable>
            <Search onSearch={setKeyword} />
            <FlatList 
            data={products}
            renderItem={({item}) => <ProductItem product={item} navigation={navigation}/>}
            keyExtractor={(item) => item.id}/>
        </View>
    );
};

export default ItemListCategories;