import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../Styles';
import Categories from '../components/Categories';

const Home = ({navigation}) => {
    return (
        <View style={styles.homeContainer}>
            <Categories navigation={navigation} />
        </View>
    );
};

export default Home;