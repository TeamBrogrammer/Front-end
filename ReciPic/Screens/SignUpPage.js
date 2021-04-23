import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,TextInput } from 'react-native';

export default function SignUpPage({navigation}) {

    constructor(props){
        super(props)
        this.state={
            FullName:'',
            Email:'',
            Password:'',
            success:''
        };
    }
    

    submit=() => {
        if(Object.keys(this.state.Fullname).length==0){
          alert("Please enter your Fullname")
          this.setState({success:"notsuccess"})
        }
        if(Object.keys(this.state.Email).length==0){
          alert("Please enter your Email")
          this.setState({success:"notsuccess"})
        }
        if(Object.keys(this.state.Password).length==0){
          alert("Please enter your Password")
          this.setState({success:"notsuccess"})
        }
        if(Object.keys(this.state.success).length==0){
            // const WebApiPath ="http://localhost:3000/api/RecipeMaintenance/UserSignIn?Email=" + this.state.Email + "&Name=" + this.state.Fullname + "&Password" + this.state.Password + ""
            // const userSignUp = async () => {
            //   try {
            //     return await axios.get(WebApiPath)
            //     } catch (error) {
            //       console.error(error)
            //     }
            //   }
            //   const GetUserSignUP = async () => {
            //   const status = await userSignUp()     
            //   alert(status)
            //   GetUserSignUP();
            // }
            alert(this.connect);

        }    
    }      

    connect = ()=> {
        const WebApiPath ="http://localhost:3000/api/RecipeMaintenance/UserSignIn?Email=" + this.state.Email + "&Name=" + this.state.Fullname + "&Password" + this.state.Password + "";
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
                        <TextInput style= {styles.inputText} placeholder={'Email'} placeholderTextColor={'#D8D3BF'} onChangeText={text=>{this.setState({Email:text});this.setState({success:''})}}/>
                    </View>
                    
                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Full Name'} placeholderTextColor={'#D8D3BF'} onChangeText={text=>{this.setState({FullName:text});this.setState({success:''})}}/>
                    </View>

                    <View>
                        <TextInput style= {styles.inputText} placeholder={'Password'} secureTextEntry = {true} placeholderTextColor={'#D8D3BF'} onChangeText={text=>{this.setState({Password:text});this.setState({success:''})}}/>        
                    </View>

                </View>

                {/* Create the "Signup" button */}
                <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {
                    this.submit,
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