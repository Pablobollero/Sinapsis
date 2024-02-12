import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../Styles';
import Header from '../components/Header';
import Categories from '../components/Categories';

const Home = ({setCategorySelected}) => {
    return (
        <View style={styles.homeContainer}>
            <Header title={'Inicio'} />
            <Categories setCategorySelected={setCategorySelected}/>
        </View>
    );
};

export default Home;