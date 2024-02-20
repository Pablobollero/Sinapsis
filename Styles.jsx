import { Platform, StyleSheet } from "react-native";
import colors from "./src/global/colors";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
        homeContainer: {
        flex: 1,
        width: '100%',
    },
    itemListCategoriesContainer: {
        flex: 1,
        width: '100%',
    },
    headerContainer: {
        backgroundColor: colors.background1,
        fontSize:30,
        width: '100%',
        marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },
    headerTitle: {
        color:'#fff',
        fontSize:30,
        textAlign: 'center',
    },
    categoriesContainer: {
        flex: 1,
        padding: 45,
    },
    cardContainer: {
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:5,
        marginBottom:10,
        backgroundColor: colors.buttons1,
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 18,
        shadowColor: colors.background1,
        shadowOffset: {
            width: 0,
            height: 12,
        },
    },
    itemContainer: {
        flex: 1,
        width: '100%',
        padding: 5,
    },
    productItemContainer: {
        flex:1,
        marginBottom: 35,
        height: 200,
        paddingTop:25,
        paddingBottom:25,
    },
    productItem: {
        flex:1,
        width: '75%',
        height: '75%',
    },
    productItemText0: {
        fontSize: 18,
        textAlign:'center',
        fontFamily:'PoppinsRegular',
    },
    productItemText1: {
        fontSize: 14,
        textAlign:'center',
        fontFamily:'PoppinsRegular',
    },
    productItemImage: {
        width: '100%',
        height: '100%',
    },
    imput: {
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        width: '80%',
        fontSize: 20,
        marginTop: 18,
    },
    imputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 25,
    },
    itemListCategoriesBackButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        gap: 8,
    },
    backButtonText: {
        fontSize: 14,
    },
    itemDetail: {
        flex: 0.65,
        padding: 3,
        alignItems: 'center',
    },
    itemDetailTitleContainer: {
        alignItems: 'center',
        marginTop: 18,
    },
    itemDetailTitle: {
        fontSize: 25,
    },
    itemDetailImageContainer: {
        width: '85%',
        height: '40%',
        marginTop: 30,
    },
    itemDetailImage: {
        width: '100%',
        height: '100%',
    },
    itemDetailText: {
        fontSize: 18,
        marginTop: 55,
    },
    itemDetailTextMoney: {
        fontSize: 25,
        marginTop: 55,
    },
    itemDetailPressable: {
        alignItems: 'center',
    },
    itemDetailBuy: {
        fontSize: 30,
        marginTop: 75,
    },
});

export default styles;