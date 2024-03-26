import { FlatList, ActivityIndicator, Text, View, StyleSheet } from "react-native";
import CartItem from "../components/CartItem";
import { usePostOrderMutation } from '../services/shopService';
import SubmitButton from '../components/SubmitButton';
import { useSelector } from "react-redux";
import colors from "../global/colors";


const Cart = ({ onSubmit }) => {

    const cartItems = useSelector((state) => state.cartReducer.value.items);
    const total = useSelector((state) => state.cartReducer.value.total);
    const [triggerPost, result] = usePostOrderMutation()
    const confirmCart = () => { triggerPost({ total, cartItems, user: 'loggedUser' }) }

    return (
        <View style={styles.stackstyles}>
            {cartItems.length > 0 ? (
                <View>
                    <FlatList
                        data={cartItems}
                        renderItem={({ item }) => <CartItem item={item} />}
                        keyExtractor={(cartItem) => cartItem.id.toString()}
                    />
                    <View style={styles.container2}>
                    <Text style={styles.cartText}>Total: $ {total}</Text>
                    {result.isLoading ? (<ActivityIndicator size="large" color="#00f3ff" />) : (<SubmitButton style={styles.button} title={'Confirmar!'} onPress={confirmCart} />)}
                </View></View>) : (<Text style={styles.cartText}>No hay productos agregados</Text>)}
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    stackstyles: {
        flex: 1,
        backgroundColor: colors.background3,
    },
    cartText: {
        marginTop: 25,
        marginLeft: 12,
        fontFamily: 'Bold',
        letterSpacing: 1.5,
    },
    container2: {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
})