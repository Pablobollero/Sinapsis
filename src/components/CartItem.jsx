import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../global/colors';

const CartItem = ({item}) => {
    return (
        <View style={styles.orderItemContainer}>
            <View style={styles.orderItemTextContainer}>
                <Text style={styles.orderItemText} >{item.title}</Text>
                <Text style={styles.orderItemText} >{item.brand}</Text>
                <Text style={[styles.orderItemText, styles.orderItemText1]} >{'$ ' + item.price}</Text>
            </View>
            <View style={styles.cartImagesContainer}>
            <Image style={styles.cartImages} resizeMode='cover' source={{ uri: item.thumbnail }} />
            </View>
        </View>
    );
};

export default CartItem;


const styles = StyleSheet.create({
    orderItemContainer: {
        flex: 1,
        height: 100,
        backgroundColor: colors.background4,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orderItemTextContainer: {
        width: '70%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 25,
        paddingHorizontal: 10,
        gap: 5,
    },
    orderItemText: {
        fontFamily: 'Regular',
        letterSpacing: 1.5,
        fontSize: 17,
        marginTop: 5,
    },
    orderItemText1: {
        fontFamily: 'Bold',
    },
    cartImagesContainer:{
        flex: 1,
    },
    cartImages:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
});