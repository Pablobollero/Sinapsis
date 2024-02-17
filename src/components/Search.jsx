import { View, TextInput, Pressable } from 'react-native';
import styles from '../../Styles';
import { AntDesign } from '@expo/vector-icons';

const Search = ({keyword, onSearch}) => {

    return (
        <View style={styles.imputContainer}>
            <TextInput onChangeText={onSearch} value={keyword} style={styles.imput} placeholder='Buscar producto...'/>
            <Pressable>
            <AntDesign name='search1' size={25} color='black' />
            </Pressable>
        </View>
    );
};

export default Search;