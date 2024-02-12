import { Text } from 'react-native'
import React from 'react'
import Card from './Card';
import styles from '../../Styles';

const ItemDetail = ({product}) => {
    return (
        <>
        <Card style={{ padding: 2.5 }}>
            <Text style={styles.categoryItemText}>{product.title}</Text>
        </Card>
        </>
    );
};

export default ItemDetail;

//ItemDetail = ProductItem