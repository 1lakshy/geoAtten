import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Btn = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <View style={styles.iconContainer}>
                <AntDesign name="calendar" size={20} color="#34C759" />
            </View>
            <Text style={styles.text}>Add to Calendar</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E9F5ED',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    iconContainer: {
        marginRight: 8,
    },
    text: {
        color: '#34C759',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Btn;
