import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, SafeAreaView,TextInput } from 'react-native';

export default function ResetPasswordPage({navigation}) {

    class FarmerSignIn extends Component {
        constructor(props){
          super(props)
          this.state={
              FullName:'',
              Email:'',
              Password:'',
              success:''
          };
        }
    }

    return (
        <View style= {styles.bgContainer}>
            <SafeAreaView>

                {/* Create the ReciPic text*/}
                <Text style = {styles.logoText}>ReciPic</Text>

                <View style= {styles.textInputContainer}>
                    
                    {/* All 2 inputs  */}
                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Email'} placeholderTextColor={'#D8D3BF'} onChangeText={text=>{this.setState({Email:text});this.setState({success:''})}}/>
                    </View>

                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Password'} placeholderTextColor={'#D8D3BF'} onChangeText={text=>{this.setState({OldPassword:text});this.setState({success:''})}}/>
                    </View>
                    
                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Enter new password'} secureTextEntry = {true} placeholderTextColor={'#D8D3BF'} onChangeText={text=>{this.setState({NewPassword1:text});this.setState({success:''})}}/>
                    </View>

                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Confirm new password'} secureTextEntry = {true} placeholderTextColor={'#D8D3BF'} onChangeText={text=>{this.setState({NewPassword2:text});this.setState({success:''})}}/>        
                    </View>

                </View>

                {/* Create the "Login" button */}
                <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {
                    this.submit,
                    navigation.navigate('homePage')
                }}>
                    <Text style = {styles.buttonText}>Reset Password</Text>
                </TouchableOpacity>

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
        marginTop: 15,
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
        color: '#191c24',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 22 
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