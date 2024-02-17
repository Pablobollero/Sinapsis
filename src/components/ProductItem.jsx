import { Image, Pressable, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import Card from './Card';
import styles from '../../Styles';

const ProductItem = ({ product, setProductDetailId }) => {

    const {width} = useWindowDimensions();
    // console.log(width, height);

    return (
        <View style={styles.productItemContainer}>
            <Card style={styles.productItem}>
                <Pressable onPress={()=> setProductDetailId(product.id)}>
                    <Text style={width > 400 ? styles.productItemText0 : styles.productItemText1}>{product.title}</Text>
                    <Image style={styles.productItemImage} resizeMode='cover' source={{ uri: product.thumbnail }} />
                </Pressable>
            </Card>
        </View>
    );
};

export default ProductItem;