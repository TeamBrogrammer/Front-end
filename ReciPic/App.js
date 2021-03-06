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
import userPage from './Screens/UserPage';
import loginPage from './Screens/LoginPage';
import signUpPage from './Screens/SignUpPage';
import selectedRecipePage from './Screens/SelectedRecipePage';
import recipesPage from './Screens/Recipes';
import resetPasswordPage from './Screens/ResetPasswordPage';
import homePage from './Screens/SearchRecipe';


const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName = "userPage">

        <Stack.Screen name="userPage" component={userPage} options={{ headerShown: false }}/>
        <Stack.Screen name="loginPage" component={loginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="signUpPage" component={signUpPage} options={{ headerShown: false }}/>
        <Stack.Screen name="selectedRecipePage" component={selectedRecipePage} options={{ headerShown: false }}/>
        <Stack.Screen name="recipesPage" component={recipesPage} options={{ headerShown: false }}/>
        <Stack.Screen name="resetPasswordPage" component={resetPasswordPage} options={{ headerShown: false }}/>
        <Stack.Screen name="homePage" component={homePage} options={{ headerShown: false }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
