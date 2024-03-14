import { View, Image, StyleSheet, Pressable, Text } from 'react-native';
import React from 'react';
import colors from '../global/colors';
import { useSelector } from 'react-redux';

const MyProfile = ({navigation}) => {
    const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value);

    return (
        <View style={styles.container}>
            {profileImage || imageCamera ? (
                <Image
                    source={{ uri: profileImage || imageCamera }}
                    resizeMode="cover"
                    style={styles.imageProfile}
                />
            ) : (
                <>
                    <Image source={require('../../assets/alien.png')} style={styles.imageProfile} resizeMode='cover' />
                </>
            )}
            <Pressable style={styles.button} onPress={() => navigation.navigate('Image Selector')}>
                {profileImage ? (<Text style={styles.text}>Cambiar Foto de Perfil</Text>) : (<Text style={styles.text}>Agregar Foto de Perfil</Text>)}
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('My Address')}>
                <Text style={styles.text}>Mi direccion</Text>
            </Pressable>
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create ({
    container: {
        backgroundColor:'white',
        paddingTop: 30,
        gap: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
    },
    imageProfile: {
        width: '60%',
        height: '35%',
        borderRadius: 125,
    },
    button: {
        width: '45%',
        borderWidth: 0.25,
        borderColor: colors.buttons1,
        borderRadius: 6,
        backgroundColor: colors.buttons2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 18,
        shadowOffset: {
            width: 0,
            height: 12,
        }
    },
    text: {
        fontFamily: 'PoppinsBold',
    },
});



// import { View, Image, StyleSheet, Pressable, Text } from 'react-native';
// import React from 'react';
// import colors from '../global/colors';
// import { useSelector } from 'react-redux';

// const MyProfile = ({navigation}) => {
//     const image = useSelector((state) => state.authReducer.value.imageCamera)

//     return (
//         <View style={styles.container}>
//             {image? (<Image source={{uri: image}} resizeMode='cover' style={styles.imageProfile} />
//             ) 
//             :  
//             (<><Image source={require('../../assets/alien.png')} style={styles.imageProfile} resizeMode='cover'/> 
//             </>)}
//             <Pressable style={styles.button} onPress={() => navigation.navigate('Image Selector')}>
//                 {image? (<Text style={styles.text}>Cambiar Foto de Perfil</Text>) : (<Text style={styles.text}>Agregar Foto de Perfil</Text>) }
//             </Pressable>
//             <Pressable style={styles.button} onPress={() => navigation.navigate('Location Selector')}>
//                 <Text style={styles.text}>Mi direccion</Text>
//             </Pressable>
//         </View>
//     );
// };