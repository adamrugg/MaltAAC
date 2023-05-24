import React, { useEffect, useState } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { openDatabase } from 'expo-sqlite';
import OnBoardingScreen from './OnBoardingScreen';
import MainPage from './MainPage';
import Settings from './Settings';

const checkOnboarding = async () => {
  try {
    const value = await AsyncStorage.getItem('onboardingComplete');
    if (value !== null) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
};



const Stack = createStackNavigator();

const App = () => {
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [db, setDb] = useState(null);

  useEffect(() => {
    (async () => {
      // const localDatabaseUri = await loadDatabase();
      // const dbInstance = openDatabase(localDatabaseUri);
      // setDb(dbInstance);

      const isOnboardingComplete = await checkOnboarding();
      setOnboardingComplete(isOnboardingComplete);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      <Stack.Navigator>
        {onboardingComplete ? (
          <>
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="Settings" component={Settings} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="OnBoardingScreen"
              component={OnBoardingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen name="Settings" component={Settings} />
          </>
        )}
      </Stack.Navigator>

    </NavigationContainer>
  );
};

AppRegistry.registerComponent('MaltAAC v3.0', () => App);

export default App;
