import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions, ScrollView, Image, StyleSheet } from 'react-native';
import assetMap from '../assetMap';


const screenWidth = Dimensions.get('window').width;

const Words = ({ data, onWordPress, size }) => {
  const [words, setWords] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [item, setItem] = useState();


  // useEffect(() => {
  //   if (!!item) {
  //     const key = `${item.Category}/${item.Image}`;
  //     if (assetMap[key]) {
  //       setImageSource(assetMap[key]);
  //     } else {
  //       console.error('Error loading image:', key);
  //     }
  //   }

  // }, [item]);

  useEffect(() => {
    if (!!data) {
      const wordsFromData = data.map(thing => thing.Word);
      console.log("words from data ", wordsFromData);
      setWords(data);
    }
  }, [data]);

  const screenWidth = Dimensions.get('window').width;

  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const chunkedWords = chunkArray(words, 4);

  const renderWord = ({ item }) => (
    <TouchableOpacity
      style={styles.wordContainer}
      onPress={() => onWordPress(item)}
    >
      <Image source={assetMap[item.Image || item]} style={styles.wordImage} />
      <Text style={styles.wordText}>{item.Word || item}</Text>
    </TouchableOpacity>

  );

  const scrollView = useRef(null);

  const handlePageChange = useCallback((pageNumber) => {
    if (scrollView.current) {
      scrollView.current.scrollTo({ x: screenWidth * pageNumber, y: 0, animated: true });
      setActivePage(pageNumber);
    }
  }, []);

  const styles = StyleSheet.create({
    wordsContainer: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: screenWidth, // set the width to screenWidth
      backgroundColor: '#dfdfdf',
      borderRadius: 30,
      paddingBottom: 10,
  },

  wordsGridContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      padding: 15,
      paddingTop: 20,
  },
    wordContainer: {
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      marginLeft: 8.75,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 16,
    
    },
  
    gridContainer: {
      flex: 1,
      borderWidth: 1,
      backgroundColor: '#e0e0e0',
      borderRadius: 5,
      padding: 5,
      marginBottom: 20, // Add space below the container
    },
  
    wordImage: {
      width: '80%',
      height: '80%',
      resizeMode: 'contain'
    },
    wordText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#000',
      textAlign: 'center',
    },
  });


  //   gridContainer: {
  //       justifyContent: 'center',
  //       alignItems: 'flex-start',
  //       width: '90%',
  //       backgroundColor: '#dfdfdf',
  //       borderRadius: 30,
  //       paddingTop: 20,
  //       paddingHorizontal: 15,
  //       marginHorizontal: '5%',
  //   },
  //   gridContent: {
  //       justifyContent: 'center',
  //       alignItems: 'flex-start',
  //       width: '100%',
  //       paddingBottom: 20, // Add paddingBottom to gridContent
  //   },
  //   category: {
  //       width: categoryWidth,
  //       height: categoryWidth,
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       margin: 5,
  //   },

  return (
    <View style={styles.wordsContainer}>
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
        {chunkedWords.map((chunk, index) => (
          <FlatList
            key={index}
            data={chunk}
            renderItem={renderWord}
            keyExtractor={(item) => (item.id ? item.id.toString() : item)}
            numColumns={2}
            contentContainerStyle={styles.wordsGridContent}
            columnWrapperStyle={{ justifyContent: 'space-between' }} // Add this line for better spacing
            scrollEnabled={false} // Disable scrolling
            style={{ width: screenWidth }} // Add this line to set the FlatList width equal to the screen width
          />
        ))}
      </ScrollView>
    </View>
);
};


export default Words;

