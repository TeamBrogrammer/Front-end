import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Image,
    
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import colors from '../Colors'

export default function Camera({ navigation }) {

    const [state, setState] = useState({

        picture: '',
        imageUri: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v872-mind-08_3.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=cd78c861b1319a09e2adf10de980ab12',
        
    });

   
    const imageUpload = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 0.8
            })
            setState ({
                imageUri: data.uri,
                
              })
            console.log(data)
        }else {
            Alert.alert("You need to allow permission to proceed")
        }

    }

    const imageCapture = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 0.8
                
            })
            setState ({
                imageUri: data.uri,
                
              })
            console.log(data)
        }else {
            Alert.alert("You need to allow permission to proceed")
        }

    }
    return (

        <View style={styles.container}>
            <View>
                <View style = {styles.pictureButton}>
                    <TouchableOpacity 
                        style={styles.buttonStyle} 
                        onPress={() => {imageCapture() }}>

                        <Text style={styles.buttonText}>Take Picture</Text>

                    </TouchableOpacity>
                </View>

                <View style= {styles.uploadButton}>
                    <TouchableOpacity 
                        style={styles.buttonStyle} 
                        onPress={() => { imageUpload() }}>

                        <Text style={styles.buttonText}>Upload Image</Text>

                    </TouchableOpacity>
                </View>

                <View style = {styles.image}>
        
                 <Image 
                    source= {{ uri : state.imageUri}}
                    style = {{width: 300 , height: 300}}
                   />
                </View>


                <View style= {styles.searchButton}>
                    <TouchableOpacity 
                        style={styles.buttonStyle} 
                        onPress={() => { console.log("search Recipe") }}>

                        <Text style={styles.buttonText}>Search Recipe</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themeDark,
        
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.themeDark,
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 22
    },
    buttonStyle: {
        backgroundColor: colors.themeLight,
        height: 55,
        borderRadius: 27.5,
        justifyContent: 'center',
        width: 300,
        marginTop: 30,
        marginLeft: 50,
        marginBottom: 170
    },
    pictureButton: {
        justifyContent: 'flex-start',
        marginBottom: -325,
        marginTop: -50,
        
        
    },

    searchButton: {
    
        flex:1,
        justifyContent: 'flex-start',
        marginBottom: -30,
        paddingTop: 40
        
       
        
    },

    image: {
        
        marginTop: -50,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',


    },

    
   
})