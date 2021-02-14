import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, SafeAreaView } from 'react-native';

// Import the background image
import userPageBackGroundImage from '../assets/UserTypePageBG.jpg';

export default function UserPage({navigation}) {

    return (
        // Background image
        <ImageBackground source = {userPageBackGroundImage} style = {styles.bgContainer}>
            <SafeAreaView>

                {/* Create the ReciPic text*/}
                <Text style = {styles.logoText}>ReciPic</Text>

                {/* Create a View to place the buttons at the bottom of the screen */}
                <View style = {styles.bottomContainer}>

                    {/* Create the "Register" button */}
                    <TouchableOpacity style = {styles.buttonStyle}>
                        <Text style = {styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                    {/* Create the "Use as Guest" button */}
                    <TouchableOpacity style = {styles.buttonStyle}>
                        <Text style = {styles.buttonText}>Use as Guest</Text>
                    </TouchableOpacity>

                    {/* Create a button to go to the login screen */}
                    <TouchableOpacity style = {styles.loginButton}>
                        <Text style = {styles.loginButtonText}>Have an account? Login</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    bgContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoText: {
        fontFamily: 'Avenir-Heavy',
        alignSelf: 'center',
        fontSize: 40,
        marginTop: 250,
    },

    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
    },

    buttonStyle: {
        backgroundColor: '#191c24',
        height: 55,
        borderRadius: 27.5,
        justifyContent: 'center',
        width: 300,
        marginBottom: 10,
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 22 
    },

    loginButton: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5,
    },

    loginButtonText: {
        fontSize: 18,
    }
});