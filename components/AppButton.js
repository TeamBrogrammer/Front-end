import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import colors from '../Colors';

function AppButton({ title, onPress, Icon, name, iconSize, iconColor }) {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, { backgroundColor: colors.themeLight }]} onPress={onPress} >
                
                  { Icon,name,iconSize,iconColor && <Icon name={name} color={iconColor} size={iconSize} style={styles.icon} />}         
                    <Text style={styles.text}> {title}</Text>

                </TouchableOpacity>

            </View>
        </>
    );
}



const styles = StyleSheet.create({

    button: {


        borderRadius: 30,
        width: '70%',
        justifyContent: 'center',
        height: 60

    },
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center'


    },
    icon: {

        position: "absolute",
        alignSelf: 'center',
        paddingRight: 110,

    },

    text: {
        textAlign: 'center',
        color: colors.themeDark,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',

    }

})


export default AppButton;