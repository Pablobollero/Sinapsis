import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import orders from '../data/orders.json';
import OrderItem from '../components/OrderItem';
import colors from '../global/colors';

const Orders = () => {
    return (
        <View style={styles.stackstyles}>
            <FlatList 
            data={orders}
            renderItem={({item}) => <OrderItem order={item}/>}
            keyExtractor={(order) => order.id}
            />
        </View>
    );
};

export default Orders;

const styles = StyleSheet.create({
    stackstyles:{
        flex: 1,
        backgroundColor: colors.background3,
    },
})