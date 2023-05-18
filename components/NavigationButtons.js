import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavigationButtons = ({ onNavigateLeft, onNavigateRight, currentPage, maxPage }) => {
    return (
        <View style={styles.navButtonsContainer}>
            <TouchableOpacity onPress={onNavigateLeft} style={styles.navButtonWrapper} disabled={currentPage === 0}>
                <View style={styles.navButton}>
                    <Icon name="arrow-left" size={24} color={currentPage === 0 ? '#aaa' : '#FFF'} />
                    <Text style={[styles.navButtonText, currentPage === 0 ? {color: '#aaa'} : {}]}>Qabel</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={onNavigateRight} style={styles.navButtonWrapper} disabled={currentPage === maxPage}>
                <View style={styles.navButton}>
                    <Text style={[styles.navButtonText, currentPage === maxPage ? {color: '#aaa'} : {}]}>Wara</Text>
                    <Icon name="arrow-right" size={24} color={currentPage === maxPage ? '#aaa' : '#FFF'} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 1,
        paddingHorizontal: 10,
        width: '100%',
        left: 0,
        right: 0,
    },
    

    navButtonWrapper: {
        backgroundColor: 'royalblue',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 6,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    navButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navButtonText: {
        marginLeft: 8,
        marginRight: 8,
        fontSize: 18,
        fontWeight: '500',
        color: '#FFFFFF',
    },
});

export default NavigationButtons;
