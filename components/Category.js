import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Category = ({ title, color, onSelect, size }) => {
    const styles = StyleSheet.create({
        container: {
            width: size, 
            height: size, 
            backgroundColor: color,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
            marginLeft: 8.75,
            // borderWidth: 3,
            borderColor: 'black',
            elevation: 3, //  Android drop shadow
            shadowColor: '#000', //  iOS drop shadow
            shadowOffset: { width: 0, height: 1 }, //  iOS drop shadow
            shadowOpacity: 0.2, //  iOS drop shadow
            shadowRadius: 1.41, //  iOS drop shadow
        },

        title: {
            fontWeight: 'bold',
            fontSize: 16,
            color: 'black',
        },
    });

    return (
        <TouchableOpacity style={styles.container} onPress={onSelect}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Category;