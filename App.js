import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons' 
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';

// import FavoriteContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: 'black'
      }}
      sceneContainerStyle= {{
        backgroundColor: '#3f2f25'
      }}
    >
      <Tab.Screen options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={size} />
        )
      }} name='Categories' component={CategoriesScreen} />
      <Tab.Screen options={{
        tabBarLabel: 'Favourites',
        tabBarIcon: ({color, size}) => (
          <Ionicons name='star-outline' color={color} size={size} />
        )
      }} name='Favourites' component={FavoritesScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <> 
      <StatusBar style="light"/>
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              cardStyle: {backgroundColor: '#3f2f25'},
            }}
          >
            <Stack.Screen 
              name='Bottom Tabs'
              component={TabNavigator}
              options= {{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name='MealsOverview'
              component={MealsOverviewScreen}
              // options={({ navigation, route }) => {
              //   const catId = route.params.categoryId
              //   return {
              //     title: catId,
              //   }
              // }}
            />
            <Stack.Screen 
              name='MealsDetails'
              component={MealsDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
    </>
  );
}


