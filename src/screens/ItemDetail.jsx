import { View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import allProducts from '../data/products.json';
import { AntDesign } from '@expo/vector-icons';
import Counter from '../components/Counter';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/shop/cartSlice';
import SubmitButton from '../components/SubmitButton';
import colors from '../global/colors';


const ItemDetail = ({ navigation, route}) => {
    const [product, setProduct] = useState(null);
    
    //reemplazar por una funcion parecida a getProductsByCategory (Linea 11) de shopService.js
    //que obtenga un item por Id
    const {id} = route.params; 

    //Logica para dar la funcionalidad al boton que agrega el producto al carrito
    const dispatch = useDispatch()
    const onAddCart = () => {
        //En lugar de quantity iria el contador para agregar la cantidad requerida, ahora esta hardcodeado con una cantidad de 1.
        dispatch(addItem({...product, quantity: 1}))
    }

    useEffect(() => {
        const productFinded = allProducts.find((product) => product.id === id);
        setProduct(productFinded);
    }, [id]);

    return (
        <View style={styles.itemContainer}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton} >
                <AntDesign name="back" size={12} color="black" />
                <Text style={styles.backButtonText}>Volver</Text>
            </Pressable>
            {product ? 
                <View style={styles.itemDetail}>
                    <View style={styles.itemDetailTitleContainer}>
                        <Text style={styles.itemDetailTitle}>{product.title}</Text>
                    </View>
                    <View style={styles.itemDetailImageContainer}>
                    <Image style={styles.itemDetailImage} resizeMode='cover' source={{ uri: product.images[0] }} />
                    </View>
                    <View>
                    <Text style={styles.itemDetailText}>{product.description}</Text>
                    <Text style={styles.itemDetailTextMoney}>{'$' + product.price}</Text>
                    <View style={styles.itemDetailContainer1}>
                    <Counter/>
                    <SubmitButton style={styles.button} title={'Confirmar!'} onPress={onAddCart} />
                    </View>
                    
                    </View>
                </View>
                : <Text><Text>Cargando...</Text></Text>}
        </View>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        paddingBottom: 100,
        width: '100%',
        backgroundColor: colors.background3,
    },
    itemDetail: {
        flex: 0.65,
        alignItems: 'center',
        paddingHorizontal: 17,
    },
    itemDetailTitleContainer: {
        alignItems: 'center',
        marginTop: 18,
    },
    itemDetailTitle: {
        fontSize: 25,
    },
    itemDetailImageContainer: {
        width: '40%',
        height: '40%',
        marginTop: 30,
    },
    itemDetailImage: {
        width: '100%',
        height: '100%',
    },
    itemDetailText: {
        fontSize: 18,
        marginTop: 30,
    },
    itemDetailTextMoney: {
        fontSize: 25,
        marginTop: 30,
    },
    itemDetailContainer1: {
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: colors.background2,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        gap: 8,
        marginLeft: 8,
    },
    backButtonText: {
        fontSize: 14,
    },
})