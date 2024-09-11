import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import colors from '../color';

const SearchComponent = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchText);
        }
    };

    return (
        <TouchableOpacity style={styles.container}>
            <Feather name="search" size={24} color="black" />
            <TextInput
                style={styles.input}
                placeholder="Search..."
                placeholderTextColor={colors.textSecondary}
                value={searchText}
                onChangeText={text => setSearchText(text)}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop:15,
    },
    input: {
        flex: 1,
        height: 40,
        borderRadius: 50,
        paddingHorizontal: 10,
        color: '#000000',
        fontSize: 18
    },
});

export default SearchComponent;
