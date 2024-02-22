import { View, Text, FlatList } from 'react-native'
import allCartItems from '../data/cart.json';
import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import styles from '../../Styles';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0); 
    
    useEffect(() => {
        const total = allCartItems.reduce((accumulated, currentItem) => accumulated += (currentItem.quantity * currentItem.price), 0);
        setCartItems(allCartItems);
        setTotal(total);
    }, []);

    return (
        <View style={styles.stackstyles}>
            <View>
                <FlatList
                    data={cartItems}
                    keyExtractor={(cartItem) => cartItem.id}
                    renderItem={({ item }) => <CartItem item={item} />} />
                <Text style={styles.cartText}>Total: $ {total}</Text>
            </View>
        </View>
    );
};

export default Cart;