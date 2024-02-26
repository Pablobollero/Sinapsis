import { View, FlatList } from 'react-native'
import React from 'react'
import styles from '../../Styles';
import CategoryItem from './CategoryItem';
import { useSelector } from 'react-redux';

const Categories = ({navigation}) => {
    const categories = useSelector(state => state.shopReducer.value.categories);

    return (
        <View style={styles.categoriesContainer}>
            <FlatList
            data={categories}
            renderItem={({item}) => <CategoryItem navigation={navigation} category={item}/>}
            keyExtractor={category => category}
            />
        </View>
    );
};

export default Categories;