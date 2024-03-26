import { View, StyleSheet } from 'react-native';
import React from 'react';
import colors from "../global/colors";

const Card = ({children, style}) => {
    return (
        <View style={{...styles.cardContainer, ...style}}>
            {children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:5,
        marginBottom:10,
        backgroundColor: colors.buttons2,
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 18,
        shadowColor: colors.background1,
        shadowOffset: {
            width: 0,
            height: 12,
        },
    },
});

// import styles from '../../Styles';