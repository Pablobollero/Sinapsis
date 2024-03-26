import { View, FlatList } from 'react-native';
import React from 'react';
import styles from '../../Styles';
import CategoryItem from './CategoryItem';
import { useGetCategoriesQuery } from '../services/shopService';

const Categories = ({navigation}) => {
    
    //En el sig Hook  vamos a traer las categorias. Data, trae la info, isLoading es para aplicar el Loading, el efecto de carga, y error para capturar el error y mostrar un mensaje de error al usuario...Hacer isLoading y error para el fetching
    const { data, isLoading, error} = useGetCategoriesQuery();
    
    return (
        <View style={styles.categoriesContainer}>
            <FlatList
            data={data}
            renderItem={({item}) => (<CategoryItem navigation={navigation} category={item}/>)}
            keyExtractor={(category) => category}
            />
        </View>
    );
};

export default Categories;