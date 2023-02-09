import { FlatList } from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

function CategoriesScreen({ navigation }) {
  
  function renderCategorieItem(itemData) {
    function onPress() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id
      })
    }
      return <CategoryGridTile 
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={onPress}
      />
  }

  return (
    <FlatList 
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategorieItem}
        numColumns={2}
    />
  )
}

export default CategoriesScreen