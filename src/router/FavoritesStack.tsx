import {createStackNavigator} from "@react-navigation/stack"
import { Favorites } from "../screens/Favorites"
import { ContentCard } from "../screens/ContentCard"



export type FavoritesStackNavigatorParams = {
  Favorites: undefined
  ContentCard: {
    cardId?: number
  }
}

const Stack = createStackNavigator<FavoritesStackNavigatorParams>();

export const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      header: () => null
    }}>
      <Stack.Screen  name='Favorites' component={Favorites}/>
      <Stack.Screen  name='ContentCard' component={ContentCard}/>
    </Stack.Navigator>
  )
}

