import {createStackNavigator} from "@react-navigation/stack"
import { ContentCard } from "../screens/ContentCard"
import { ActivityOneScreen } from "../screens/Activities/ActivityOne"
import { ActivityTwoScreen } from "../screens/Activities/ActivityTwo"
import { ActivityThreeScreen } from "../screens/Activities/ActivityThree"
import { ActivityFourScreen } from "../screens/Activities/ActivityFour"



export type ActivityStackNavigatorParams = {
  Activity: undefined
  ContentCard: {
    cardId?: number
  }
}

const ActivityOneStack = createStackNavigator<ActivityStackNavigatorParams>();

export const ActivityOneStackNavigator = () => {
  return (
    <ActivityOneStack.Navigator screenOptions={{
      header: () => null
    }}>
      <ActivityOneStack.Screen  name='Activity' component={ActivityOneScreen}/>
      <ActivityOneStack.Screen  name='ContentCard' component={ContentCard}/>
    </ActivityOneStack.Navigator>
  )
}

const ActivityTwoStack = createStackNavigator<ActivityStackNavigatorParams>();

export const ActivityTwoStackNavigator = () => {
  return (
    <ActivityTwoStack.Navigator screenOptions={{
      header: () => null
    }}>
      <ActivityTwoStack.Screen  name='Activity' component={ActivityTwoScreen}/>
      <ActivityTwoStack.Screen  name='ContentCard' component={ContentCard}/>
    </ActivityTwoStack.Navigator>
  )
}

const ActivityThreeStack = createStackNavigator<ActivityStackNavigatorParams>();

export const ActivityThreeStackNavigator = () => {
  return (
    <ActivityThreeStack.Navigator screenOptions={{
      header: () => null
    }}>
      <ActivityThreeStack.Screen  name='Activity' component={ActivityThreeScreen}/>
      <ActivityThreeStack.Screen  name='ContentCard' component={ContentCard}/>
    </ActivityThreeStack.Navigator>
  )
}

const ActivityFourStack = createStackNavigator<ActivityStackNavigatorParams>();

export const ActivityFourStackNavigator = () => {
  return (
    <ActivityFourStack.Navigator screenOptions={{
      header: () => null
    }}>
      <ActivityFourStack.Screen  name='Activity' component={ActivityFourScreen}/>
      <ActivityFourStack.Screen  name='ContentCard' component={ContentCard}/>
    </ActivityFourStack.Navigator>
  )
}

