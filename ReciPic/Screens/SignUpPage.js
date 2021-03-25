import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,TextInput } from 'react-native';

export default function SignUpPage({navigation}) {
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
                        <TextInput style= {styles.inputText} placeholder={'Full Name'} placeholderTextColor={'#D8D3BF'}/>
                    </View>

                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Password'} secureTextEntry = {true} placeholderTextColor={'#D8D3BF'}/>        
                    </View>

                </View>

                {/* Create the "Signup" button */}
                <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {
                    navigation.navigate('homePage')
                }}>
                        <Text style = {styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Create a View to place the buttons at the bottom of the screen */}
                <View style = {styles.bottomContainer}>
            
                {/* Create a button to go to the Login screen */}
                <TouchableOpacity style = {styles.loginButton} onPress = {() => {
                    navigation.navigate('loginPage')
                }}>
                    <Text style = {styles.loginButtonText}>Have an account? Login.</Text>
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
        alignSelf: 'center',
        fontSize: 40,
        marginTop: 250,
    },
    bottomContainer: {
        width: 400,
        borderTopWidth:  1,  
        borderTopColor:  "#D8D3BF", 
    },
    buttonStyle: {
        backgroundColor: '#D8D3BF',
        height: 55,
        borderRadius: 27.5,
        justifyContent: 'center',
        width: 300,
        marginTop: 30,
        marginLeft: 50,
        marginBottom:170
    },
    buttonText: {
        color: '#191c24',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 22 
    },
    loginButton: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5
    },
    loginButtonText: {
        color: '#D8D3BF',        
        fontSize: 18,
    },
    inputText: {
        marginBottom: 20,
        height:45,
        fontSize: 18, 
        borderBottomWidth: 1,
        borderBottomColor: '#D8D3BF',
        color: '#D8D3BF',
        textAlignVertical: 'top',
        alignSelf: 'center',
        justifyContent: 'center',
        width: 300
    },
    textInputContainer: {
        marginTop: 60        
    }
});