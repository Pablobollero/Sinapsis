import { Image, Pressable, Text, View, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import styles from '../../Styles';

const ProductItem = ({ product, navigation }) => {

    //This States will detect and handle the mobile orientation
    const [isPortrait, setIsPortrait] = useState(true);
    const [isLandscape, setIsLandscape] = useState(false);
    
    //This will tell us the mobile measures.
    const {width, height} = useWindowDimensions();
    
        //This Effect will detect the user event how he is handling the mobile orientation.
        useEffect(() => {
            if (height > width) {
                setIsPortrait(true);
                setIsLandscape(false);
            } else {
                setIsPortrait(false);
                setIsLandscape(true);
            }
        }, [width, height])

    return (
        <View style={styles.productItemContainer}>
            <Card style={styles.productItem}>
                <Pressable style={styles.productItemPressable} onPress={()=> navigation.navigate("ItemDetail", {id: product.id})}>
                    <Text style={width > 400 ? styles.productItemText0 : styles.productItemText1}>{product.title}</Text>
                    <Image style={styles.productItemImage} resizeMode='cover' source={{ uri: product.thumbnail }} />
                </Pressable>
            </Card>
        </View>
    );
};

export default ProductItem;