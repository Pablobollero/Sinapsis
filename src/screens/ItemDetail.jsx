import { View, Text, Pressable, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import allProducts from '../data/products.json';
import styles from "../../Styles";
import { AntDesign } from '@expo/vector-icons';

const ItemDetail = ({ productDetailId, setProductDetailId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const productFinded = allProducts.find((product) => product.id === productDetailId);
        setProduct(productFinded)
    }, [productDetailId]);

    const volver = () => {
        setProductDetailId(0);
    }

    return (
        <View style={styles.itemContainer}>
            <Pressable onPress={volver} style={styles.itemListCategoriesBackButton}>
                <AntDesign name="back" size={12} color="black" />
                <Text style={styles.backButtonText}>Volver</Text>
            </Pressable>
            {product ? (
                <View style={styles.itemDetail}>
                    <View style={styles.itemDetailTitleContainer}>
                        <Text style={styles.itemDetailTitle}>{product.title}</Text>
                    </View>
                    <Image style={styles.itemDetailImage} resizeMode='cover' source={{ uri: product.images[0] }} />
                    <View>
                    <Text style={styles.itemDetailText}>{product.description}</Text>
                    <Text style={styles.itemDetailText}>{'AR$ ' + product.price}</Text>
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