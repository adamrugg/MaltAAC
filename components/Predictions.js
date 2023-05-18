// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { View, Text, TouchableOpacity, FlatList, Dimensions, ScrollView, Image, StyleSheet } from 'react-native';
// import assetMap from '../assetMap';


// const screenWidth = Dimensions.get('window').width;

// const Predictions = ({ data, onPredictionPress, size }) => {
//   const [predictions, setPredictions] = useState([]);
//   const [activePage, setActivePage] = useState(0);
//   const [item, setItem] = useState();

//   useEffect(() => {
//     if (!!data) {
//       const predictionsFromData = data.map(thing => thing.Prediction);
//       console.log("predictions from data ", predictionsFromData);
//       setPredictions(data);
//     }
//   }, [data]);

//   const screenWidth = Dimensions.get('window').width;

//   const chunkArray = (arr, chunkSize) => {
//     const chunks = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//       chunks.push(arr.slice(i, i + chunkSize));
//     }
//     return chunks;
//   };

//   const chunkedPredictions = chunkArray(predictions, 4);

//   const renderPrediction = ({ item }) => (
//     <TouchableOpacity
//       style={styles.predictionContainer}
//       onPress={() => onPredictionPress(item)}
//     >
//       <Image source={assetMap[item.Image]} style={styles.predictionImage} />
//       <Text style={styles.predictionText}>{item.Prediction}</Text>
//     </TouchableOpacity>

//   );

//   const scrollView = useRef(null);

//   const handlePageChange = useCallback((pageNumber) => {
//     if (scrollView.current) {
//       scrollView.current.scrollTo({ x: screenWidth * pageNumber, y: 0, animated: true });
//       setActivePage(pageNumber);
//     }
//   }, []);

//   const styles = StyleSheet.create({
//     PredictionsContainer: {
//       justifyContent: 'center',
//       alignItems: 'flex-start',
//       width: '90%',
//       backgroundColor: '#dfdfdf',
//       borderRadius: 30,
//       paddingBottom: 10,
//       marginHorizontal: '5%',
//     },

//     predictionsGridContent: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       width: screenWidth - 39.5, // Set width to screenWidth
//       // flex : 1, // Set flexGrow to 1
//       flexGrow: 1,
//       padding: 15,
//       paddingTop: 20,
//       // flexWrap: 'wrap'
//     },
//     predictionContainer: {
//       width: size,
//       height: size,
//       justifyContent: 'center',
//       alignItems: 'center',
//       margin: 5,
//       marginLeft: 8.75,
//       padding: 10,
//       backgroundColor: 'white',
//       borderRadius: 16,

//     },

//     gridContainer: {
//       flex: 1,
//       borderWidth: 1,
//       backgroundColor: '#e0e0e0',
//       borderRadius: 5,
//       padding: 5,
//       marginBottom: 20, // Add space below the container
//     },

//     predictionImage: {
//       width: '80%',
//       height: '80%',
//       resizeMode: 'contain'
//     },
//     predictionText: {
//       fontSize: 18,
//       fontWeight: '500',
//       color: '#000',
//       textAlign: 'center',
//     },
//   });

//   return (
//     <View style={styles.predictionsContainer}>
//       <ScrollView
//         ref={scrollView}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         scrollEventThrottle={1}
//         onScroll={e => {
//           const currentPage = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
//           setActivePage(currentPage);
//         }}
//       >
//         {chunkedPredictions.map((chunk, index) => (
//           <FlatList
//             key={index}
//             data={chunk}
//             renderItem={renderPrediction}
//             keyExtractor={(item) => item.id.toString()}
//             numColumns={2}
//             contentContainerStyle={styles.predictionsGridContent}
//             columnWrapperStyle={{ justifyContent: 'space-between' }} // Add this line for better spacing
//             scrollEnabled={false} // Disable scrolling
//           />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };


// export default Predictions;
