import { StyleSheet } from "react-native";
import colors from "./src/global/colors";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
    },
    homeContainer: {
        flex: 1,
        width: '100%',
    },
    itemListCategoriesContainer: {
        flex: 1,
        width: '100%',
    },
    headerContainer: {
        backgroundColor: colors.background_1,
        fontSize:30,
        width: '100%',
    },
    headerTitle: {
        color:'#fff',
        fontSize:30,
        textAlign: 'center',
    },
    categoriesContainer: {
        flex: 1,
        padding: 45,
        backgroundColor: 'orange',
    },
    cardContainer: {
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:5,
        marginBottom:10,
        backgroundColor: '#ffffff',
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
    },
    itemListCategoriesContainer: {
        flex: 1,
    },
    cardDetailContainer: {
        height: 200,
        marginTop:40,
        marginBottom:40,
    },
    cardDetail: {
        width: '75%',
        height: '100%',
    },
    categoryItemText: {
        fontSize: 15,
        textAlign:'center',
        fontFamily:'PoppinsRegular',
    },
    categoryItemImage: {
        width: 25,
    },
    imput: {
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        width: '80%',
        fontSize: 20,
    },
    imputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 25,
    },
});

export default styles;