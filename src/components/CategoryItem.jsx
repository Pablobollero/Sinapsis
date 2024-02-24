import { Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from '../../Styles';
import Card from './Card';

const CategoryItem = ({category, navigation}) => {
    return (
        <>
        <Card style={styles.categoryItemContainer}>
            <Pressable onPress={() => navigation.navigate('ItemListCategories', {category})}>
            <Text>{category}</Text>
            </Pressable>
        </Card>
        </>
    );
};

export default CategoryItem;