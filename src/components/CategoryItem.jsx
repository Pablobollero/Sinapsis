import { Text, View } from 'react-native'
import React from 'react'
import styles from '../../Styles';
import Card from './Card';

const CategoryItem = ({category}) => {
    return (
        <>
        <Card style={{ padding: 2.5 }}>
            <Text style={styles.categoryItemText}>
                {category}
            </Text>
        </Card>
        </>
    );
};

export default CategoryItem;