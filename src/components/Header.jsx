import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../Styles';

const Header = ({title}) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

export default Header;