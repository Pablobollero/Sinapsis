import { StyleSheet } from "react-native";
import colors from "./src/global/colors";


const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        width: '100%',
    },
    homeContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background3,
    },
    itemListCategoriesContainer: {
        flex: 1,
        width: '100%',
    },
    categoriesContainer: {
        height: '90.5%',
        padding: 45,
        backgroundColor: colors.background3,
    },
    test:{
        backgroundColor: 'red',
    },
    categoryItemCard:{
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginTop: 12,
    },
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
    itemContainer: {
        flex: 1,
        paddingBottom: 100,
        width: '100%',
        backgroundColor: colors.background3,
    },
    productItemContainer: {
        flex:1,
        height: 250,
        backgroundColor: colors.background3,
    },
    productItem: {
        width: '75%',
        height: '85%',
        borderRadius: 5,
    },
    productItemPressable: {
        flex:1,
        paddingBottom: 25,
    },
    productItemText0: {
        fontSize: 18,
        textAlign:'center',
        fontFamily:'Regular',
    },
    productItemText1: {
        fontSize: 14,
        textAlign:'center',
        fontFamily:'Regular',
    },
    productItemImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
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
    itemDetailComprar: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: colors.buttons2,
    },
    stackstyles:{
        flex: 1,
        backgroundColor: colors.background3,
    },
    stackCart:{
        backgroundColor: colors.background4,
    },
    cartText:{
        marginTop: 25,
        marginLeft: 12,
        fontFamily:'Bold',
    },
    tabBar: {
        backgroundColor: colors.background2,
        shadowColor: colors.background1,
        elevation: 6,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    tabContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderItemContainer: {
        flex: 1,
        height: 100,
        backgroundColor: colors.background4,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orderItemTextContainer: {
        width: '70%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 5,
    },
    orderItemText: {
        fontFamily:'Regular',
        fontSize: 17,
        marginTop: 5,
    },
    orderItemText1: {
        fontFamily:'Bold',
        fontSize: 17,
        marginTop: 17,
    },
    cartImagesContainer:{
        flex: 1,
    },
    cartImages:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
    imageProfile: {
        width: 30,
        height: 30,
        borderRadius: 25,
    },
});

export default styles;