import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const OnBoardingContent = ({ title, description, image }) => {
  return (
    <View style={styles.container}>

      {image && (
        <Image
          source={image}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width, }}
          resizeMode="contain"
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10, // optional, add some space between title and description
    paddingTop: 20,
  },
  description: {
    fontSize: 16, // you can adjust this as needed
    color: 'darkgrey', // a light dark grey color
    textAlign: 'center',
  },
});

export default OnBoardingContent;
