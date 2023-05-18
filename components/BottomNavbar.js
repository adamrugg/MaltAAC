import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavBar = ({ items, onPresses }) => {
    return (
        <View style={styles.navBar}>
            {items.map((item, index) => (
                <TouchableOpacity key={index} onPress={onPresses[index]} style={styles.navBarItem}>
                    <Icon name={item.icon} size={24} color={item.color} />
                    <Text style={styles.navBarText}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Change the background color to solid white
        paddingVertical: 12.5,
    },
    navBarItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBarText: {
        fontSize: 14,
        color: '#808080', // Change the text color to off-grey
    },

});

export default BottomNavBar;
