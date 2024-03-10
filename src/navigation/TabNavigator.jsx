import { Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrdersStack from './OrdersStack';
import styles from "../../Styles";
import { Entypo, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../global/colors";
import MyProfileStack from './MyProfileStack';


const TabNavigator = () => {
    
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar }}>
            <Tab.Screen name="ShopTab" component={ShopStack} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.tabContainer}>
                            <Entypo name="shop" size={30} color={focused ? colors.buttons2 : colors.buttons1} />
                            <Text style={{ color: focused ? 'white' : 'grey' }} >Shop</Text>
                        </View>
                    )
                }
            }} />
            <Tab.Screen name="CartTab" component={CartStack} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.tabContainer}>
                            <FontAwesome name="opencart" size={30} color={focused ? colors.buttons2 : colors.buttons1} />
                            <Text style={{ color: focused ? 'white' : 'grey' }} >Carrito</Text>
                        </View>
                    )
                }
            }} />
            <Tab.Screen name="OrdersTab" component={OrdersStack} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.tabContainer}>
                            <Ionicons name="receipt" size={30} color={focused ? colors.buttons2 : colors.buttons1} />
                            <Text style={{ color: focused ? 'white' : 'grey' }} >Ordenes</Text>
                        </View>
                    )
                }
            }} />
            <Tab.Screen name="MyProfileStack" component={MyProfileStack} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.tabContainer}>
                            <MaterialCommunityIcons name="alien" size={30} color={focused ? colors.buttons2 : colors.buttons1} />
                            <Text style={{ color: focused ? 'white' : 'grey' }} >Mi Perfil</Text>
                        </View>
                    )
                }
            }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;