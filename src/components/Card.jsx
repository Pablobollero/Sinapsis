import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../Styles';

const Card = ({children, style}) => {
    return (
        <View style={{...styles.cardContainer, ...style}}>
            {children}
        </View>
    );
};

export default Card;
