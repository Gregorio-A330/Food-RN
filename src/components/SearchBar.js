import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

//github.com/expo/vector-icons
// localização de icones ^^
//importar o icone desejado, é preciso duas etapas, o nome do icone e quem criou 
// exemplo -> import { biblioteca informada no site } from '@expo/vector-icons';
// para incluir no código -> basta colocar o <nome da biblioteca seguida de name="nomedoicone"/>


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 5
    },
    inputStyle:{
        flex: 1,
        fontSize: 18

    },
    iconStyle:{
        fontSize:40,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;