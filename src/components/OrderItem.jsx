import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../Styles';

const OrderItem = ({order}) => {

    const total = order.items.reduce((accumulated, currentItem) => (accumulated += currentItem.quantity * currentItem.price), 0);

    return (
        <View style={styles.orderItemContainer}>
            <View style={styles.orderItemTextContainer}>
                <Text style={styles.orderItemText}>{new Date(order.createdAt).toLocaleString()}</Text>
                <Text style={styles.orderItemText1}>$ {total}</Text>
            </View>
        </View>
    );
};

export default OrderItem;