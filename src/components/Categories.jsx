import { View, FlatList } from 'react-native'
import React from 'react'
import styles from '../../Styles';
import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';

const Categories = () => {
    return (
        <View style={styles.categoriesContainer}>
            <FlatList
            data={categories}
            renderItem={({item}) => <CategoryItem category={item}/>}
            keyExtractor={(category) => category}
            />
        </View>
    );
};

export default Categories;