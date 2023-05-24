import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const icons = ['volume-high', 'square', 'trash'];


const ControlButton = ({ titles, onPresses, style, onPress }) => {
    return (
        <View style={[styles.button, style]}>
            {titles.map((title, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        onPresses[index]();
                        if (onPress) {
                            onPress();
                        }
                    }}
                    style={styles.buttonSegment(index === titles.length - 1)}
                >
                    <Icon name={icons[index]} size={24} color="black" style={styles.icon} />
                    <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: '#4682B4',
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: 'orange',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 1.41,
    },
    buttonSegment: (last) => ({
        paddingHorizontal: 25,
        paddingVertical: 5,
        borderRightWidth: last ? 0 : 1,
        borderColor: 'white',
    }),
    buttonText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
    icon: {
        alignSelf: 'center',
    },
});

export default ControlButton;
