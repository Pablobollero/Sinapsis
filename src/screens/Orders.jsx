import { View, FlatList } from 'react-native';
import React from 'react';
import orders from '../data/orders.json';
import OrderItem from '../components/OrderItem';
import styles from '../../Styles';

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