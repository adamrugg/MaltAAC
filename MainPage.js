import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler, Platform, TouchableOpacity, FlatList, Dimensions, TextInput, ScrollView, Animated, Image, Vibration } from 'react-native';
import Category from './components/Category';
import Words from './components/Words';
import ControlButton from './components/ControlButton';
import BottomNavBar from './components/BottomNavbar';
import NavigationButtons from './components/NavigationButtons';
import { useCallback, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppRegistry } from 'react-native';
import assetMap from './assetMap';
import audioMap from './audioMap';
import { Audio } from 'expo-av';
import bigrams from './assets/predictions/bigrams.json';
import trigrams from './assets/predictions/trigrams.json';
import * as Haptics from 'expo-haptics';


AppRegistry.registerComponent('MaltAAC v3.0', () => MainPage);

const imageData = require('./assets/data/imageData.json');

const numColumns = 2;
const containerWidthPercentage = 0.9; // Container width percentage (90%)
const screenWidth = Dimensions.get('window').width;
const containerWidth = screenWidth * containerWidthPercentage;
const categoryWidth = (containerWidth - (numColumns + 1) * 20) / numColumns;
const itemsPerRow = 2;
const itemWidth = (Dimensions.get('window').width - 30) / 2;


const MainPage = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Home');
    const [currentPage, setCurrentPage] = useState(0);
    const [maxPage, setMaxPage] = useState(3);
    const [selectedWords, setSelectedWords] = useState([]);
    const [sound, setSound] = useState();
    const [gridState, setGridState] = useState('categories');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showWords, setShowWords] = useState(false); // Add showWords state
    const [showPredictions, setShowPredictions] = useState(false); // Add showWords state
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(0);
    const [gridSize, setGridSize] = useState(0);
    const [predictions, setPredictions] = useState([]);
    const [transformedPredictions, setTransformedPredictions] = useState([]);

    const [prefix, setPrefix] = useState("");

    const pagerView = useRef(null);

    useEffect(() => {
        // console.log("bigrams ", bigrams);

        const backAction = () => {
            BackHandler.exitApp();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        if (!!selectedCategory) {
            // console.log("new category selected: ", selectedCategory);
            const filteredData = imageData.filter(item => item.Category == selectedCategory);
            setData(filteredData);
        }
    }, [selectedCategory]);

    const handleCategorySelect = async (category) => {
        // Provide medium haptic feedback (ieqaf) when a category is selected
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setSelectedCategory(category.title);
        const filteredData = imageData.filter(item => item.Category == selectedCategory);
        setData(filteredData);
        setShowWords(true);
    };

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    useEffect(() => {
        if (!selectedWords.length) return;
        const lastWord = selectedWords[selectedWords.length - 1];
        const secondLastWord = selectedWords[selectedWords.length - 2];
        // console.log("lastword ", lastWord);

        // If the last two words exist in the trigrams, use the trigrams
        if (secondLastWord && trigrams[`${secondLastWord.Word} ${lastWord.Word}`]) {
            setPrefix(`${secondLastWord.Word} ${lastWord.Word}`);
            setPredictions([trigrams[`${secondLastWord.Word} ${lastWord.Word}`]]);
        } else if (bigrams[lastWord.Word]) {
            // If the last word exists in the bigrams, use the bigrams
            setPrefix(lastWord.Word);
            setPredictions([bigrams[lastWord.Word]]);
        } else {
            // If no predictions are found, set predictions to an empty array
            setPredictions([]);
        }


    }, [selectedWords]);

    useEffect(() => {
        // console.log("predictions: ", predictions);
        // console.log("prefix", prefix);

        let transPredictions = [];
        predictions.forEach((prediction, index) => {
            for (let word in prediction) {
                if (word !== "</s>") {
                    transPredictions.push({ Word: word, Image: word, id: transPredictions.length });
                }
            }
        });

        setTransformedPredictions(transPredictions);
    }, [prefix, predictions]);

    useEffect(() => {
        // console.log("transformedPredictions: ", transformedPredictions);
    }, [transformedPredictions]);

    const handleBackToCategories = () => {
        setSelectedCategory(null);
        setPredictions([]); // resets predictions
    };

    const handleWordRemove = (indexToRemove) => {
        setSelectedWords(selectedWords.filter((word, index) => index !== indexToRemove));
    };


    const addWord = async (word) => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setSelectedWords([...selectedWords, word]);
    };

    const scrollView = useRef(null);

    const chunkArray = (arr, chunkSize) => {
        if (!arr || arr.length === 0) {
            return [];
        }

        let result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };
    // List of categories 
    const categories = [
        { id: 1, title: 'Alfabett', color: 'darkseagreen' },
        { id: 2, title: 'Artikli', color: 'darkorange' },
        { id: 3, title: 'Emozzjonijiet', color: '#0033CC' },
        { id: 4, title: 'Ġenerali', color: '#FF9999' },
        { id: 5, title: 'Ġisem', color: '#CC6600' },
        { id: 6, title: 'Ġugarelli', color: '#CC6600' },
        { id: 7, title: 'Ħwejjeġ', color: '#CC6600' },
        { id: 8, title: 'Ikel', color: '#CC6600' },
        { id: 9, title: 'Kuluri', color: '#0033CC' },
        { id: 10, title: 'Numri', color: 'lightpink' },
        { id: 11, title: 'Pronomi', color: '#FFFE01' },
        { id: 12, title: 'Uġigħ', color: '#CC6600' },
        { id: 13, title: 'Verbi', color: '#33FF33' },
        { id: 14, title: 'Xorb', color: '#CC6600' },
    ];

    const renderCategory = ({ item }) => (
        <Category
            style={styles.category}
            title={item.title}
            color={item.color}
            onSelect={() => handleCategorySelect(item)}
            size={categoryWidth} // Pass the categoryWidth as a prop
        />
    );

    const [arrowRotation] = useState(new Animated.Value(0));

    const animateArrow = () => {
        Animated.timing(arrowRotation, {
            toValue: navbarVisible ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const ArrowIcon = () => {
        const rotation = arrowRotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
        });

        return (
            <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                <Icon name="arrow-down" size={24} color="#FFF" />
            </Animated.View>
        );
    };
    const toggleNavbar = () => {
        animateArrow();
        setNavbarVisible(!navbarVisible);
    };

    const [navbarVisible, setNavbarVisible] = useState(true);

    const onGridContainerLayout = (e) => {
        const { width } = e.nativeEvent.layout;
        setGridSize(width);
    }

    const playAudio = (word) => {
        return new Promise(async (resolve, reject) => {
            console.log('Loading Sound for ', audioMap[word]);
            const { sound } = await Audio.Sound.createAsync(audioMap[word]);
            setSound(sound);
            console.log('Playing Sound');
            await sound.playAsync();
            sound.setOnPlaybackStatusUpdate((status) => {
                if (status.didJustFinish) {
                    console.log('Sound Finished, Unloading');
                    sound.unloadAsync();
                    resolve();
                } else if (status.error) {
                    console.log('Playback Error', status.error);
                    sound.unloadAsync();
                    reject(new Error(status.error));
                }
            });
        });
    }

    const handleTkellem = async () => {
        for (const word of selectedWords) {
            console.log("word is ", word);
            const { Category, Word } = word;
            await playAudio(Word);
        }
    };

    const handleIeqaf = async () => {
        if (sound) {
            console.log('Stopping Sound');
            await sound.stopAsync();
        }
    };


    const handlePress = () => {
        Vibration.vibrate(100); // vibrate for 100 milliseconds.
    };

    const renderCategoriesGrid = () => {
        const chunkedCategories = chunkArray(categories, 4);

        return (
            <View style={styles.gridContainer} onLayout={onGridContainerLayout}>
                {/* <TouchableOpacity onPress={handleBackToCategories} style={styles.luraButton}>
                    <Icon name="arrow-back" size={18} color="#FFF" />
                </TouchableOpacity> */}
                <ScrollView
                    ref={scrollView}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={1}
                    onScroll={e => {
                        const currentPage = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
                        setActivePage(currentPage);
                    }}
                >
                    {chunkedCategories.map((chunk, index) => (
                        <FlatList
                            key={index}
                            data={chunk}
                            renderItem={renderCategory}
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={2}
                            contentContainerStyle={styles.gridContent}
                            scrollEnabled={false} // Disable scrolling
                        />
                    ))}
                </ScrollView>
                {/* {
                <NavigationButtons
                    onNavigateLeft={() => pageScrollLeft()}
                    onNavigateRight={() => pageScrollRight()}
                    onBackToCategories={handleBackToCategories}
                /> } */}

                {/* {selectedCategory && <Words data={data} />} */}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.selectedWordsContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    {selectedWords.map((word, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={async () => {
                                await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                                handleWordRemove(index);
                            }}
                        >
                            <View style={styles.selectedWord}>
                                <Image
                                    source={assetMap[word.Image]}
                                    style={[styles.wordImage, { width: categoryWidth * 0.6, height: categoryWidth * 0.6 }]}
                                />
                                <Text>{word.Word}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.controlButtonsContainer}>
                <ControlButton
                    titles={['Tkellem', 'Ieqaf', 'Ħassar']}
                    onPresses={[
                        async () => {
                            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                            handleTkellem();
                        },
                        async () => {
                            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            handleIeqaf();
                        },
                        async () => {
                            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                            setSelectedWords([]); //empties the selectedWords array
                        },
                    ]}
                />
            </View>


            <View style={{ flex: 1 }}>
                <View style={styles.ButtonsWrapper}>
                    {selectedCategory && showWords ? (
                        transformedPredictions && transformedPredictions.length > 0 ? (
                            <Words data={transformedPredictions} onWordPress={addWord} size={categoryWidth} />
                        ) : (
                            <Words data={data} onWordPress={addWord} size={categoryWidth} />
                        )) : (
                        <>
                            {gridState === 'categories' && renderCategoriesGrid()}
                        </>
                    )}

                    {/* {!showWords && (
                        <NavigationButtons
                            onNavigateLeft={() => pageScrollLeft()}
                            onNavigateRight={() => pageScrollRight()}
                            onBackToCategories={handleBackToCategories}
                            maxPage={maxPage}
                        />
                    )} */}
                </View>

                <View style={styles.navButtonContainer}>
                    <TouchableOpacity style={[styles.luraButton]} onPress={handleBackToCategories}>
                        <Text style={styles.buttonText}>⬅️</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {navbarVisible && (
                <BottomNavBar
                    activeTab={activeTab}
                    items={[
                        { title: 'Home', icon: 'home', color: activeTab === 'Home' ? '#FFA500' : '#808080' },
                        { title: 'Preferenzi', icon: 'settings', color: activeTab === 'Settings' ? '#FFA500' : '#808080' },
                        { title: 'Għajnuna', icon: 'help-circle', color: activeTab === 'Help' ? '#FFA500' : '#808080' },
                    ]}
                    onPresses={[
                        () => {
                            setActiveTab('Home');
                            navigation.navigate('MainPage');  // navigate to HomeScreen
                        },
                        () => {
                            setActiveTab('Settings');
                            // navigation.navigate('Settings');  // navigate to SettingsScreen
                        },
                        () => {
                            setActiveTab('Help');
                            navigation.navigate('OnBoardingScreen');  // navigate to HelpScreen
                        },
                    ]}
                />
            )}
            {/* <TouchableOpacity onPress={toggleNavbar} style={styles.arrowUpButton}>
                <ArrowIcon />
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#f0f0f0',
    },
    gridContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '90%',
        backgroundColor: '#dfdfdf',
        borderRadius: 30,
        paddingTop: 20,
        paddingHorizontal: 15,
        marginHorizontal: '5%',
    },
    gridContent: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        paddingBottom: 20,
    },
    category: {
        width: categoryWidth,
        height: categoryWidth,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    controlButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
    },
    navButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navButtonText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: '500',
    },
    luraButton: {
        top: -5,
        left: 15,
        backgroundColor: 'royalblue',
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowUpButton: {
        position: 'absolute',
        bottom: 50,
        right: 10,
        backgroundColor: 'royalblue',
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wordImage: {
        width: categoryWidth * 0.8,
        height: categoryWidth * 0.8,
        resizeMode: 'contain',
    },
    selectedWordsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 165,
        maxHeight: 300,
        padding: 5,
        backgroundColor: '#dfdfdf',
        borderRadius: 5,
        marginHorizontal: '5%',
        width: '90%',
        alignSelf: 'center',
        marginTop: 100,
    },
    selectedWord: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 2,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },
});

export default MainPage;