import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,TextInput } from 'react-native';

export default function LoginPage({navigation}) {
    return (
        <View style= {styles.bgContainer}>
            <SafeAreaView>

                {/* Create the ReciPic text*/}
                <Text style = {styles.logoText}>ReciPic</Text>

                <View style= {styles.textInputContainer}>
                    
                    {/* All 2 inputs  */}
                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Email'} placeholderTextColor={'#D8D3BF'}/>
                    </View>
                    
                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Password'} secureTextEntry = {true} placeholderTextColor={'#D8D3BF'}/>        
                    </View>

                </View>

                {/* Create the "Forgot Password" button */}
                <TouchableOpacity>
                            <Text style= {styles.forgotPasswordButtonText}>Forgot Password</Text>
                </TouchableOpacity>

                {/* Create the "Login" button */}
                <TouchableOpacity style = {styles.buttonStyle}>
                        <Text style = {styles.buttonText}>Login</Text>
                </TouchableOpacity>

                {/* Create a View to place the buttons at the bottom of the screen */}
                <View style = {styles.bottomContainer}>
            
                    {/* Create a button to go to the Sign Up screen */}
                    <TouchableOpacity style = {styles.signUpButton}>
                        <Text style = {styles.signUpButtonText}>Don't have an account? Sign Up.</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({

    bgContainer: {
        flex: 1,
        backgroundColor: '#191c24',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: '#D8D3BF',
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
        backgroundColor: '#D8D3BF',
        height: 55,
        borderRadius: 27.5,
        justifyContent: 'center',
        width: 300,
        marginTop: 30,
    },
    buttonText: {
        fontFamily: 'Avenir-Heavy',
        color: '#191c24',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 22 
    },
    signUpButton: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5,
    },
    signUpButtonText: {
        color: '#D8D3BF',        
        fontSize: 18,
    },
    inputText: {
        fontFamily: 'Avenir-Heavy',
        marginBottom: 20,
        height:45,
        fontSize: 18, 
        borderBottomWidth: 1,
        borderBottomColor: '#D8D3BF',
        color: '#E59866',
        textAlignVertical: 'top',
        alignSelf: 'center',
        justifyContent: 'center',
        width: 300
    },
    textInputContainer: {
        marginTop: 60        
    },
    forgotPasswordButtonText: {
        marginTop:-15,
        color: "#D8D3BF",
        textAlign: "right"
    }
});