import { Pressable, Text } from 'react-native'
import React from 'react'
import styles from '../../Styles';
import Card from './Card';
import { useDispatch } from 'react-redux';
import {setCategorySelected} from '../features/shop/shopSlice';


const CategoryItem = ({category, navigation}) => {
const dispatch = useDispatch();

    return (
        <>  
            <Pressable
            onPress={() => {
                dispatch(setCategorySelected(category))
                navigation.navigate('ItemListCategories', { category });}}>
                <Card style={styles.categoryItemCard}>
                    <Text>{category}</Text>
                </Card>
            </Pressable>
        </>
    );
};

export default CategoryItem;