import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import OnBoardingContent from './OnBoardingContent';
import { LinearGradient } from 'expo-linear-gradient';

const OnBoardingScreen = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if (currentPage === 2) {
            navigation.navigate('MainPage');
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleSkip = () => {
        navigation.navigate('MainPage');
    };

    const pages = [
        { title: 'Merħba għal MaltAAC! ' },
        { title: 'Ikkomunika billi tagħfas il-kaxex' },
        { title: 'Żid kliem u frażijiet favoriti!' },
    ];


    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}></View>
            <View style={styles.contentContainer}>
                <OnBoardingContent title={pages[currentPage].title} />
                <View style={styles.paginationContainer}>
                    {[0, 1, 2].map((index) => (
                        <View
                            key={index}
                            style={[
                                styles.paginationDot,
                                currentPage === index && styles.paginationDotActive,
                            ]}
                        />
                    ))}
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                {currentPage === 0 ? (
                    <TouchableOpacity
                        style={[styles.nextButton, styles.initialBackButton]}
                        onPress={handleNext}
                    >
                        <Text style={styles.buttonText}>Kompli ➡️</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.navButtonContainer}>
                        <TouchableOpacity style={[styles.backButton, styles.button]} onPress={handleBack}>
                            <Text style={styles.buttonText}>⬅️ Lura</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.nextButton, styles.button]} onPress={handleNext}>
                            <Text style={styles.buttonText}>
                                {currentPage === 2 ? 'Ibda! ➡️' : 'Kompli ➡️'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

                <View style={styles.skipButtonContainer}>
                    <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                        <Text style={styles.skipText}>Aqbez ⏩</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        width: '100%',
        marginBottom: 50,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    navButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
        alignItems: 'center',
    },
    button: {
        flex: 1,
        minWidth: '45%',
        marginHorizontal: 8,
        elevation: 3, //  Android drop shadow
        shadowColor: '#000', //  iOS drop shadow
        shadowOffset: { width: 0, height: 1 }, //  iOS drop shadow
        shadowOpacity: 0.2, //  iOS drop shadow
        shadowRadius: 1.41, //  iOS drop shadow
    },
    backButton: {
        backgroundColor: '#F6920D',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 50,
        marginRight: 10,
    },
    initialBackButton: {
        justifyContent: 'center',
        backgroundColor: '#F6920D',
        paddingVertical: 16,
        borderRadius: 50,
        marginBottom: 10,
        width: '100%',
        elevation: 3, //  Android drop shadow
        shadowColor: '#000', //  iOS drop shadow
        shadowOffset: { width: 0, height: 1 }, //  iOS drop shadow
        shadowOpacity: 0.2, //  iOS drop shadow
        shadowRadius: 1.41, //  iOS drop shadow
      },

    nextButton: {
        justifyContent: 'center',
        backgroundColor: '#F6920D',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 50,
    },
    singleButton: {
        backgroundColor: '#F6920D',
        width: '100%',
        height: 44,
        borderRadius: 50,
        marginBottom: 20,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'medium',
        textAlign: 'center',
        fontSize: 20,
        width: '100%',
        letterSpacing: 2,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    paginationDot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#2196f3',
        marginHorizontal: 8,
    },
    paginationDotActive: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'orange',
        marginHorizontal: 8,
    },
    skipText: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 5,
        paddingTop: 2,
    },
    skipButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },
    skipButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    contentWrapper: {
        flex: 1,
        width: '100%',
    },
});

export default OnBoardingScreen;