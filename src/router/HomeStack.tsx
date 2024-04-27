import {createStackNavigator} from "@react-navigation/stack"
import { Home } from "../screens/Home"
import { ContentCard } from "../screens/ContentCard"



export type HomeStackNavigatorParams = {
  Home: undefined
  ContentCard: {
    cardId?: number
  }
}

const Stack = createStackNavigator<HomeStackNavigatorParams>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      header: () => null
    }}>
      <Stack.Screen  name='Home' component={Home}/>
      <Stack.Screen  name='ContentCard' component={ContentCard}/>
    </Stack.Navigator>
  )
}

