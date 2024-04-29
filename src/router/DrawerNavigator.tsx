import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import { ProfileDrawerView } from '../shared/components/ProfileDrawerView';
import { Home } from '../screens/Home';
import { StatusBar } from 'react-native';
import { AppTheme } from '../config/AppTheme';
import { HomeStackNavigator } from './HomeStack';
import { Favorites } from '../screens/Favorites';
import { FavoritesStackNavigator } from './FavoritesStack';
import { AboutUsScreen } from '../screens/About';

export type DrawerNavigatorParams = {
  HomeStack: undefined,
  FavoritesStack: undefined,
  AboutUs: undefined,
  // ReceiveTow: undefined,
  // WatchOrder: undefined,
  
}

const Drawer = createDrawerNavigator<DrawerNavigatorParams>();
const options: DrawerNavigationOptions = {
  drawerType:"slide",
  drawerStyle:{
    backgroundColor:AppTheme.primary
  },
  drawerActiveBackgroundColor: AppTheme.selectedMenuContainer,
  drawerActiveTintColor:AppTheme.selectedMenuText,
  drawerInactiveTintColor: AppTheme.textboxs,
  drawerItemStyle:{
    borderRadius:10,
    paddingHorizontal:20
  },
  headerTitle:'OpSys',
  headerStyle:{
    backgroundColor:AppTheme.primary,
  },
  headerTintColor:AppTheme.textboxs,
  headerTitleAlign: "center",
  headerTitleStyle:{
    fontWeight:"bold",
    fontSize:18,

}

}
export const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={AppTheme.secondary}/>
      <Drawer.Navigator initialRouteName="HomeStack" 
        drawerContent={(props) => <ProfileDrawerView {...props}/>}
        screenOptions={options}>
          <Drawer.Screen options={{
            title: "Inicio",
          }} name="HomeStack" component={HomeStackNavigator} />
          
          <Drawer.Screen options={{
            title: "Favoritos",
          }} name="FavoritesStack" component={FavoritesStackNavigator} />
          
          <Drawer.Screen options={{
            title: "Nosotros",
          }} name="AboutUs" component={AboutUsScreen} />

        </Drawer.Navigator>
          
    </NavigationContainer>
  )
}

