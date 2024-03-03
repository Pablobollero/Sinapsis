import { FlatList, Pressable, Text, View } from "react-native";
import styles from "../../Styles";
import CartItem from "../components/CartItem";
import { usePostOrderMutation } from '../services/shopService';
import { useSelector } from "react-redux";


const Cart = () => {

    const cartItems = useSelector((state) => state.cartReducer.value.items);
    const total = useSelector((state) => state.cartReducer.value.total);
    const [triggerPost, result] = usePostOrderMutation()
    const confirmCart = () => {triggerPost({total, cartItems, user: 'loggedUser'})}

    return (
        <View style={styles.stackstyles}>
            {cartItems.length > 0 ? (
            <View>
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => <CartItem item={item} />} 
                    keyExtractor={(cartItem) => cartItem.id.toString()} 
                    />
                <Text style={styles.cartText}>Total: $ {total}</Text>
                <Pressable onPress={confirmCart}>
                    <Text>Confirm</Text>
                </Pressable>
            </View>) : (
        <Text>No hay productos agregados</Text>
    )}
    </View>
    );
};

export default Cart;