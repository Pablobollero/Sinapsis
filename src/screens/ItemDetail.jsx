import { View, Text, Pressable, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import allProducts from '../data/products.json';
import styles from "../../Styles";
import { AntDesign } from '@expo/vector-icons';
import Counter from '../components/Counter';


const ItemDetail = ({ navigation, route}) => {
    const [product, setProduct] = useState(null);
    
    const {id} = route.params;

    useEffect(() => {
        const productFinded = allProducts.find((product) => product.id === id);
        setProduct(productFinded)
    }, [id]);

    return (
        <View style={styles.itemContainer}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton} >
                <AntDesign name="back" size={12} color="black" />
                <Text style={styles.backButtonText}>Volver</Text>
            </Pressable>
            {product ? (
                <View style={styles.itemDetail}>
                    <View style={styles.itemDetailTitleContainer}>
                        <Text style={styles.itemDetailTitle}>{product.title}</Text>
                    </View>
                    <View style={styles.itemDetailImageContainer}>
                    <Image style={styles.itemDetailImage} resizeMode='cover' source={{ uri: product.images[0] }} />
                    </View>
                    <View>
                    <Text style={styles.itemDetailText}>{product.description}</Text>
                    <Text style={styles.itemDetailTextMoney}>{'$' + product.price}</Text>
                    <View style={styles.itemDetailContainer1}>
                    <Counter/>
                    <Pressable style={styles.button}>
                        <Text style={styles.itemDetailComprar}>
                            COMPRAR
                        </Text>
                    </Pressable>
                    </View>
                    
                    </View>
                </View>)
                : <Text><Text>Cargando...</Text></Text>}
        </View>
    );
};

export default ItemDetail;