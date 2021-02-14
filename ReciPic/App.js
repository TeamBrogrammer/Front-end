import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// Import the font library
// import * as Font from 'expo-font';
// import { useFonts } from '@use-expo/font';

// To only display the app after the font has loaded
// import AppLoading from 'expo-app-loading';

// For Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import all the pages
import userPage from './Screens/LoginPage';

const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName = "userPage">

        <Stack.Screen name="userPage" component={userPage} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );


  // const [isLoaded] = useFonts({
  //   "Blogger": require("./assets/Fonts/BloggerSans-Bold.otf"),
  // });

  // if (!isLoaded) {
  //   return <AppLoading />;

  // } else {

    // return (

    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName = "userPage">
  
    //       <Stack.Screen name="userPage" component={userPage} options={{ headerShown: false }}/>
  
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // );
  // }
}
