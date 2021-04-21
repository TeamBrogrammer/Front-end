import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import colors from '../Colors'

export default function Camera({ navigation }) {

    const [state, setState] = useState({

        picture: '',

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
        justifyContent: 'center',
        marginBottom: -350,
        marginTop: 150,
        
    },
   
})