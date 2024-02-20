import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../Styles';
import Header from '../components/Header';
import Categories from '../components/Categories';

const Home = ({navigation}) => {
    return (
        <View style={styles.homeContainer}>
            <Categories navigation={navigation} />
        </View>
    );
};

export default Home;