import { Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from '../../Styles';
import Card from './Card';

const CategoryItem = ({category, navigation}) => {
    return (
        <>
        <Card style={{ padding: 2.5 }}>
            <Pressable onPress={() => navigation.navigate('ItemListCategories', {category})}>
            <Text style={styles.categoryItemText}>{category}</Text>
            </Pressable>
        </Card>
        </>
    );
};

export default CategoryItem;