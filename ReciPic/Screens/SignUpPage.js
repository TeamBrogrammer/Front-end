import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';

export default function SignUpPage({navigation}) {

    const [FullName, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Status, setStatus] = useState("");
    
    const submit=()=>{
        if(Fullname.Text.length==0){
          alert("Please enter your Fullname")
          setStatus("notsuccess")
          return false;
        }
        if(Email.Text.length==0){
          alert("Please enter your Email")
          setStatus("notsuccess")
          return false;
        }
        if(Password.Text.length==0){
          alert("Please enter your Password")
          setStatus("notsuccess")
          return false;
        }
        if(Status.Text.length==0){
            alert(connect())
            setState({success:"success"})
            return true;
        }    
    }      

    const connect = ()=> {
        const WebApiPath ="http://localhost:3000/api/RecipeMaintenance/UserSignIn?Email=" + Email.Text + "&Name=" + Fullname.Text + "&Password" + Password.Text + "";
        fetch(WebApiPath).then(response => {
            if(response.status == 200){
                return response.test();
            }
            else{
                throw new Error("Oops! Unable to process your request !.");
            }
        }).then(resonseText => {
            this.setState({response: resonseText})
        }).catch(error => {
            console.error(error.message);
        })
    }
      
    return (
        <View style= {styles.bgContainer}>
            <SafeAreaView>

                {/* Create the ReciPic text*/}
                <Text style = {styles.logoText}>ReciPic</Text>

                <View style= {styles.textInputContainer}>
                    
                    {/* All 2 inputs  */}
                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Email'} placeholderTextColor={'#D8D3BF'} onChangeText={text=>{setEmail(text);}}/>
                    </View>
                    
                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Full Name'} placeholderTextColor={'#D8D3BF'} onChangeText={text=>{setName(text);}}/>
                    </View>

                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Password'} secureTextEntry = {true} placeholderTextColor={'#D8D3BF'} onChangeText={text=>{setPassword(text);}}/>        
                    </View>

                </View>

                {/* Create the "Signup" button */}
                <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {
                    submit().then(function (status){
                        navigation.navigate('homePage');
                    });
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