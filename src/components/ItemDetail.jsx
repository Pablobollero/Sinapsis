import { Image, Text, View } from 'react-native';
import React from 'react';
import Card from './Card';
import styles from '../../Styles';

const ItemDetail = ({ product }) => {
    return (
        <View style={styles.cardDetailContainer}>
            <Card style={styles.cardDetail}>
                <Text style={styles.categoryItemText}>{product.title}</Text>
                <Image style={styles.categoryItemImage} resizeMode='cover' source={{ uri: product.thumbnail }} />
            </Card>
        </View>
    );
};

export default ItemDetail;

// ProductItem = ItemDetail