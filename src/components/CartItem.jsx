import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from '../../Styles';

const CartItem = ({item}) => {
    return (
        <View style={styles.orderItemContainer}>
            <View style={styles.orderItemTextContainer}>
                <Text style={styles.orderItemText} >{item.title}</Text>
                <Text style={styles.orderItemText} >{item.brand}</Text>
                <Text style={styles.orderItemText} >{'$ ' + item.price}</Text>
            </View>
            <View style={styles.cartImagesContainer}>
            <Image style={styles.cartImages} resizeMode='cover' source={{ uri: item.thumbnail }} />
            </View>
        </View>
    );
};

export default CartItem;