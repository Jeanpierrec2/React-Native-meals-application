import { View, FlatList, StyleSheet } from 'react-native'

import MealItem from './MealItem'

export default function MealsList({displayedMeals, navigation}) {
    function renderMealItem(itemData) {

    const mealItemProps = {
        id: itemData.item.id,
        title: itemData.item.title,
        imageUrl: itemData.item.imageUrl,
        affordability: itemData.item.affordability,
        complexity: itemData.item.complexity,
        duration: itemData.item.duration,
        steps: itemData.item.steps,
        ingredients: itemData.item.ingredients
    }

    return <>
        <MealItem 
          navigation={navigation}
          {...mealItemProps}
        />
    </>
    }

    return (
        <View style={styles.container}>
            <FlatList 
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})