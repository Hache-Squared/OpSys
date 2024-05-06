import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {ProfileDrawerView} from '../shared/components/ProfileDrawerView';
import {StatusBar} from 'react-native';
import {AppTheme} from '../config/AppTheme';
import {HomeStackNavigator} from './HomeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FavoritesStackNavigator} from './FavoritesStack';
import {AboutUsScreen} from '../screens/About';
import {
  ActivityFourStackNavigator,
  ActivityOneStackNavigator,
  ActivityThreeStackNavigator,
  ActivityTwoStackNavigator,
} from './ActivitiesStack';

export type DrawerNavigatorParams = {
  HomeStack: undefined;
  ActivityOne: undefined;
  ActivityTwo: undefined;
  ActivityThree: undefined;
  ActivityFour: undefined;

  FavoritesStack: undefined;
  AboutUs: undefined;
  // ReceiveTow: undefined,
  // WatchOrder: undefined,
};

const Drawer = createDrawerNavigator<DrawerNavigatorParams>();
const options: DrawerNavigationOptions = {
  drawerType: 'slide',
  drawerStyle: {
    backgroundColor: AppTheme.primary,
  },
  drawerActiveBackgroundColor: AppTheme.selectedMenuContainer,
  drawerActiveTintColor: AppTheme.selectedMenuText,
  drawerInactiveTintColor: AppTheme.textboxs,
  drawerItemStyle: {
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  headerTitle: 'OpSys',
  headerStyle: {
    backgroundColor: AppTheme.primary,
  },
  headerTintColor: AppTheme.textboxs,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
};
export const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={AppTheme.secondary} />
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerContent={props => <ProfileDrawerView {...props} />}
        screenOptions={options}>
        <Drawer.Screen
          options={{
            title: 'Todos',
            drawerIcon: ({color}) => (
              <Ionicons name="home" size={20} color={color} />
            ),
          }}
          name="HomeStack"
          component={HomeStackNavigator}
        />

        <Drawer.Screen
          options={{
            title: 'AF1',
            drawerIcon: ({color}) => (
              <Ionicons name="book" size={20} color={color} />
            ),
          }}
          name="ActivityOne"
          component={ActivityOneStackNavigator}
        />

        <Drawer.Screen
          options={{
            title: 'AF2',
            drawerIcon: ({color}) => (
              <Ionicons name="book" size={20} color={color} />
            ),
          }}
          name="ActivityTwo"
          component={ActivityTwoStackNavigator}
        />

        <Drawer.Screen
          options={{
            title: 'AF3',
            drawerIcon: ({color}) => (
              <Ionicons name="book" size={20} color={color} />
            ),
          }}
          name="ActivityThree"
          component={ActivityThreeStackNavigator}
        />

        <Drawer.Screen
          options={{
            title: 'AF4',
            drawerIcon: ({color}) => (
              <Ionicons name="book" size={20} color={color} />
            ),
          }}
          name="ActivityFour"
          component={ActivityFourStackNavigator}
        />

        <Drawer.Screen
          options={{
            title: 'Favoritos',
            drawerIcon: ({color}) => (
              <Ionicons name="heart" size={20} color={color} />
            ),
          }}
          name="FavoritesStack"
          component={FavoritesStackNavigator}
        />

        <Drawer.Screen
          options={{
            title: 'Nosotros',
            drawerIcon: ({color}) => (
              <Ionicons name="people" size={20} color={color} />
            ),
          }}
          name="AboutUs"
          component={AboutUsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
