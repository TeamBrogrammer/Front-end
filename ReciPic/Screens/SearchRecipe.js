import React, { useState, useEffect } from 'react';
import { StyleSheet,
         Text, 
         View, 
         TouchableOpacity, 
         ScrollView, 
         Image, 
         FlatList,
         TextInput
         } from 'react-native';


import colors from '../Colors'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';







const imageItem = [
    {
        id: '1',
        title: 'Prawn Rice',
        ingredients: ' lettuce, leeks, cauli flower lettuce, leeks, cauli flower leeks, cauli flower  ',
        itemUrl: 'https://www.woovly.com/blog/wp-content/uploads/2019/11/bhelpuri1-650x350.jpg',

    },
    {
        id: '2',
        title: 'Grilled Chicken Shawarma',
        ingredients: ' lettuce, leeks, cauli flower ',
        itemUrl: 'https://t3.ftcdn.net/jpg/02/55/42/50/360_F_255425068_CyDrGsVcu1Bl2SdJ2yXx35Rlp8jyNCCQ.jpg',
    },
    {
        id: '3',
        title: 'Pepperoni Pizza',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://www.rnz.co.nz/assets/news_crops/60885/eight_col_32917696_l.jpg?1531180823',
    },
    {
        id: '4',
        title: 'Vegetable Hakka Noodles',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1-500x375.jpg',
    },
    {
        id: '5',
        title: 'Spicy Macaroni',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://img.freepik.com/free-photo/macaroni-pasta-tomato-sauce-with-spoon-wood-wooden-table_66899-1155.jpg?size=626&ext=jpg',
    },
    {
        id: '6',
        title: 'Chilly Toast',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://bellyonmymind.com/wp-content/uploads/2018/10/IMG_5048.jpg',
    },

    {
        id: '7',
        title: 'White Sauce Pasta',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://static.toiimg.com/photo/54292840.cms',
    },

    {
        id: '8',
        title: 'Classic Chicken Sub',
        ingredients: ' lettuce, leeks, cauli flower',
        itemUrl: 'https://st4.depositphotos.com/1006753/22144/i/1600/depositphotos_221441778-stock-photo-classic-blt-sandwiches.jpg',
    },




];




export default function SearchRecipe({ navigation }) {

    const [searchQuery, setSearchQuery] = useState({

    });

  

        // const handleSearch = query => {
        //     setState({ searchQuery: query })
        // }




      let handleSearch = text => {
        setSearchQuery({ searchQuery: text })
        };
      


    return (


        <View style={styles.container}>

            <View style={styles.textContainer}>

                <Text style={styles.heading} > ReciPic</Text>

            </View>
            <View style={styles.bar}>

                {/* <AppButton title='Search'
                    color={colors.themeLight}
                    onPress={() => { console.log('hi') }}
                    Icon={FontAwesome}
                    name={"search"}
                    iconColor={colors.black}
                    iconSize={30}
                >
                </AppButton> */}

                <View style={styles.containerSearchBox}>



                    <TextInput
                        style={styles.searchBox}
                        name="query"
                        value={searchQuery}
                        placeholder="Search..."
                        onChange={text => handleSearch(text)}


                    />

                    <FontAwesome
                        name={"search"}
                        color={colors.black}
                        size={30}
                        style={styles.iconPosition}

                    />

                </ View>

            </View>



            <Text style={styles.textFav}> Favourites</Text>


            <View style={styles.imageContent}>
                <>
                    <ScrollView horizontal={true}>

                        <FlatList
                            data={imageItem}
                            keyExtractor={item => item.id}
                            horizontal
                            renderItem={({ item }) =>



                                <View style={styles.foodContent}>
                                    <Image
                                        style={{
                                            width: 190,
                                            height: 100,
                                            borderRadius: 15,
                                            overflow: 'hidden',
                                            marginBottom: 10




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

                    </ScrollView>
                </>
            </View>
            <View style={styles.footer}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('homePage')
                }}>

                    <MaterialCommunityIcons
                        style={styles.heartIcon}
                        name="heart-circle" size={54}
                        color="black" />

                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('homePage') // Open Camera
                }}>

                    <MaterialCommunityIcons
                        style={styles.camIcon}
                        name="camera" size={54}
                        color="black" />

                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    bar: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-start',
        paddingBottom: 350,
        position: 'absolute'


    },
    camIcon: {
        position: "absolute",
        justifyContent: "center",
        alignSelf: 'center',
        paddingLeft: 100,
        paddingTop: 8

    },
    container: {
        flex: 1,
        backgroundColor: colors.themeDark,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSearchBox: {
        flex:1,
        alignItems: 'center'
        
    },
    iconPosition: {
        position: "absolute",
        alignSelf: 'center',
        paddingTop: 8,
        paddingRight: 190,
        marginRight: 5

    },
    foodContent: {
        marginBottom: 100
    },

    footer: {
        width: '100%',
        height: 70,
        backgroundColor: colors.themeLight
    },
    heading: {
        color: colors.themeLight,
        fontSize: 45,
        fontWeight: 'bold'

    },
    heartIcon: {
        position: "absolute",
        justifyContent: "center",
        alignSelf: 'flex-start',
        paddingLeft: 110,
        paddingTop: 8
    },

    imageContent: {



        flexDirection: 'row',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },

    image: {
        width: '100%',
        height: '100%'
    },

    ingredients: {
        color: colors.themeLight,
        flexDirection: 'column',
        width: 200,
        marginTop: 10

    },

    searchIcon: {
        alignSelf: 'center',
    },

    searchBox: {


        textAlign: 'center',
        backgroundColor: colors.themeLight,
        borderRadius: 20,
        width: '70%',
        height: 45
    },
    textContainer: {
        flex: 1,
        paddingTop: 100

    },
    textFav: {
        color: colors.themeLight,
        fontSize: 25,
        position: "relative",
        alignSelf: "flex-start"

    },
    title: {

        width: 200,
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.themeLight
    },

});
