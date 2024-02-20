import { View, Text, Pressable, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import allProducts from '../data/products.json';
import styles from "../../Styles";

const ItemDetail = ({navigation, route}) => {
    const [product, setProduct] = useState(null);
    
    const {id} = route.params;

    useEffect(() => {
        const productFinded = allProducts.find((product) => product.id === id);
        setProduct(productFinded)
    }, [id]);

    return (
        <View style={styles.itemContainer}>
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
                    <Pressable style={styles.itemDetailPressable}>
                        <Text style={styles.itemDetailBuy}>
                            Comprar
                        </Text>
                    </Pressable>
                    </View>

                </View>)
                : <Text><Text>Cargando...</Text></Text>}
        </View>
    );
};

export default ItemDetail;