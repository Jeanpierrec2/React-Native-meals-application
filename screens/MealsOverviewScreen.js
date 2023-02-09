import { useLayoutEffect } from "react"

import MealsList from "../components/MealsList/MealsList"
import { MEALS, CATEGORIES } from "../data/dummy-data"

function MealsOverviewScreen({ route, navigation }) {
  
  const mealId = route.params.categoryId

  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryIds.includes(mealId)
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === mealId).title

    navigation.setOptions({
        title: categoryTitle
    })
  },[mealId, navigation])

  return(
    <MealsList displayedMeals={displayedMeals} navigation={navigation} />
  )
}

export default MealsOverviewScreen
