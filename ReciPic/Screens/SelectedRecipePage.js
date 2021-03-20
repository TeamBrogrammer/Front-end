import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, ScrollView } from 'react-native';

export default function SelectedRecipePage({navigation}) {

    const [state, setState] = useState ({
        recipeTitle: "BBQ Chicken Pizza",
        ingredients: "Chicken\nTomatoes\nGarlic\nChillie\n1tp spoon of water\nTurmeric",
        instructions: "To prevent the pizza toppings from making your pizza crust soggy, brush the shaped dough lightly with olive oil. Using your fingers, push dents into the surface of the dough to prevent bubbling. Top the dough evenly with 1 third cup BBQ sauce. Toss the cooked chicken with the remaining BBQ sauce, then scatter all around the pizza. Add the cheeses and red onion.\nTo prevent the pizza toppings from making your pizza crust soggy, brush the shaped dough lightly with olive oil. Using your fingers, push dents into the surface of the dough to prevent bubbling. Top the dough evenly with 1 third cup BBQ sauce. Toss the cooked chicken with the remaining BBQ sauce, then scatter all around the pizza. Add the cheeses and red onion.\nTo prevent the pizza toppings from making your pizza crust soggy, brush the shaped dough lightly with olive oil. Using your fingers, push dents into the surface of the dough to prevent bubbling. Top the dough evenly with 1 third cup BBQ sauce. Toss the cooked chicken with the remaining BBQ sauce, then scatter all around the pizza. Add the cheeses and red onion.\nTo prevent the pizza toppings from making your pizza crust soggy, brush the shaped dough lightly with olive oil. Using your fingers, push dents into the surface of the dough to prevent bubbling. Top the dough evenly with 1 third cup BBQ sauce. Toss the cooked chicken with the remaining BBQ sauce, then scatter all around the pizza. Add the cheeses and red onion.",
    })

    return (
        <View style = {styles.bgContainer}>
            <SafeAreaView>

                <View style = {styles.headerContainer}>
                    {/* Add the back button */}
                    <TouchableOpacity style = {styles.backButton}>

                        <Image 
                        source = {require('../assets/BackButton.png')}
                        />
                    </TouchableOpacity>

                    {/* Add the "Ingredients" title text */}
                    <Text style = {styles.recipeTitle}>{state.recipeTitle}</Text>
                </View>

                {/* Add a ScrollView to be able to scroll through the recipe */}
                <ScrollView style = {styles.scrollView}
                automaticallyAdjustContentInsets = {true}>
                    {/* Add the recipe image */}
                    <Image 
                    source = {{uri: 'https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg'}}
                    resizeMode = {'cover'}
                    style = {styles.recipeImage}
                    />

                    {/* Add the "Ingredients" title text */}
                    <Text style = {styles.ingredientsTitle}>Ingredients</Text>
                    {/* Add the Ingredients text */}
                    <Text style = {styles.ingredientsText}>{state.ingredients}</Text>

                    {/* Add the "Instructions" title text */}
                    <Text style = {styles.instructionsTitle}>Instructions</Text>
                    {/* Add the Instructions text */}
                    <Text style = {styles.instructionsText}>{state.instructions}</Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({

    bgContainer: {
        backgroundColor: '#191c24',
        flex: 1,
        width: null,
        height: null,
    },

    headerContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },

    backButton: {
        alignSelf: 'flex-start',
        marginLeft: 20,
    },

    recipeTitle: {
        color: '#D8D3BF',
        fontSize: 25,
        marginLeft: 20,
        fontWeight: 'bold',
    },

    scrollView: {
        marginTop: 15,
        marginBottom: 50,
    },

    recipeImage: {
        alignSelf: 'center',
        width: 400,
        height: 250,
    },

    ingredientsTitle: {
        color: '#D8D3BF',
        fontSize: 25,
        marginLeft: 20,
        marginTop: 20,
        fontWeight: 'bold',
    },

    ingredientsText: {
        color: '#D8D3BF',
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },

    instructionsTitle: {
        color: '#D8D3BF',
        fontSize: 25,
        marginLeft: 20,
        marginTop: 20,
        fontWeight: 'bold',
    },

    instructionsText: {
        color: '#D8D3BF',
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    }
});