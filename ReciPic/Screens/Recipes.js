import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


import colors from '../Colors'

const imageItem = [
    {
        id: 1,
        title: 'Prawn Rice',
        ingredients: ' lettuce, leeks, cauli flower lettuce, leeks, cauli flower leeks, cauli flower  ',
        itemUrl: 'https://www.woovly.com/blog/wp-content/uploads/2019/11/bhelpuri1-650x350.jpg',

    },
    {
        id: 2,
        title: 'Grilled Chicken Shawarma',
        ingredients: ' lettuce, leeks, cauli flower ',
        itemUrl: 'https://t3.ftcdn.net/jpg/02/55/42/50/360_F_255425068_CyDrGsVcu1Bl2SdJ2yXx35Rlp8jyNCCQ.jpg',
    },
    {
        id: 3,
        title: 'Pepperoni Pizza',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://www.rnz.co.nz/assets/news_crops/60885/eight_col_32917696_l.jpg?1531180823',
    },
    {
        id: 4,
        title: 'Vegetable Hakka Noodles',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1-500x375.jpg',
    },
    {
        id: 5,
        title: 'Spicy Macaroni',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://img.freepik.com/free-photo/macaroni-pasta-tomato-sauce-with-spoon-wood-wooden-table_66899-1155.jpg?size=626&ext=jpg',
    },
    {
        id: 6,
        title: 'Chilly Toast',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://bellyonmymind.com/wp-content/uploads/2018/10/IMG_5048.jpg',
    },

    {
        id: 7,
        title: 'White Sauce Pasta',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://static.toiimg.com/photo/54292840.cms',
    },

    {
        id: 8,
        title: 'Classic Chicken Sub',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://st4.depositphotos.com/1006753/22144/i/1600/depositphotos_221441778-stock-photo-classic-blt-sandwiches.jpg',
    },




];


export default function Recipes({navigation}) {
    return (

        <View style={styles.container}>

            <View style={styles.header}>


                <TouchableWithoutFeedback onPress={console.log('back')}>

                    <Ionicons style={styles.icon}
                        name="md-chevron-back"
                        size={65}
                        color={colors.themeLight}
                    />

                </TouchableWithoutFeedback>

                <Text style={styles.heading} > Recipes</Text>

            </View>

            <View style={styles.imageContent}>


              
                <FlatList
                    numColumns={2}
                    style = {styles.list}
                    data={imageItem}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                    


                        <View style={styles.foodContent}>
                            <Image
                                style={{
                                    width: 150,
                                    height: 100,
                                    borderRadius: 15,
                                    overflow: 'hidden',
                                    marginBottom: 10,
                                    




                                }}
                                source={{ uri: item.itemUrl }}
                            />

                            <View style={styles.foodDetails}>

                                <Text style={styles.title}> {item.title} </Text>
                                <Text style={styles.ingredients}
                                    numberOfLines={2}
                                >
                                    {item.ingredients} </Text>
                            </View>
                        </View>

                    }
                />
                {/* flatlist  ended */}



            </View>



        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.themeDark,

    },
    foodContent: {
        marginLeft: 30
    },
   
    heading: {
        position: 'absolute',
        color: colors.themeLight,
        fontSize: 25,
        fontWeight: 'bold',
        padding: 20,
        marginLeft: 50,
        marginTop: 15

    },
    icon: {
        padding: 10,
        paddingTop: 18
    },
    imageContent: {
        flex: 1,
        width: '100%',

    },
    ingredients: {
        color: colors.themeLight,
        flexDirection: 'column',
        width: 150,
        marginTop: 10,
        marginBottom: 20
        
    },
    list: {
        
    },
    title: {
        
        width: 150,
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.themeLight
    },
})

