import { useContext, useLayoutEffect } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

import IconButton from "../components/IconButton"
import Subtitle from "../components/MealDetail/Subtitle"
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/dummy-data"
import { Context } from "../store/context/favorites-context"

function MealsDetailsScreen({ navigation, route }) {

    const favoriteMealsCtx = useContext(Context)

    const mealId = route.params.mealId

    const meal = MEALS.find(meal => meal.id === mealId)

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

    const changeFavoriteStatusHandler = () => {
      if(mealIsFavorite) {
        favoriteMealsCtx.removeFavorite(mealId)
      } else {
        favoriteMealsCtx.addFavorite(mealId)
      }
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return <IconButton 
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
          />
        }
      })
    },[navigation, changeFavoriteStatusHandler])


  return (
    <ScrollView style={styles.root}>
      <Image 
        source={{uri: meal.imageUrl}}
        style={styles.image}
      />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails 
        affordability={meal.affordability}
        complexity={meal.complexity}
        duration={meal.duration}
        textStyle={styles.detailsText}
      />
      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
            {meal.ingredients.map(ingredient => {
              return(
                <View style={styles.listItem}> 
                  <Text style={styles.itemText} key={ingredient}>{ingredient}</Text>
                </View>
            )})}
          <Subtitle>Steps</Subtitle>
            {meal.steps.map(step => {
              return ( 
                <View key={step} style={styles.listItem}>
                  <Text style={styles.itemText}>{step}</Text>
                </View>
              )})}
        </View>
      </View>
    </ScrollView>
  )
}

export default MealsDetailsScreen

const styles = StyleSheet.create({
  root: {
    marginBottom: 50
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
    color: 'white'
  },
  detailsText: {
    color: 'white'
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: '#e2b497'
  },
  itemText: {
    color: '#351401',
    textAlign: 'center'
  },
  listContainer: {
    width: '80%',
  },
  listOuter: {
    alignItems: 'center'
  }
})