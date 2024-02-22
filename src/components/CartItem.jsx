import { View, Text, Image } from 'react-native';
import React from 'react';
import orders from '../data/orders.json';
import styles from '../../Styles';

const CartItem = ({item}) => {
    return (
        <View style={styles.orderItemContainer}>
            <View style={styles.orderItemTextContainer}>
                <Text>{item.title}</Text>
                <Text>{item.brand}</Text>
                <Text style={styles.orderItemText1} >{'$ ' + item.price}</Text>
            </View>
            <View style={styles.cartImagesContainer}>
            {item.images.map((image, index) => (
                    <Image
                        key={index}
                        style={styles.cartImages}
                        resizeMode='cover'
                        source={{ uri: image }}
                    />
                ))}
            </View>
        </View>
    );
};

export default CartItem;