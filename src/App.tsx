
import { DataProvider } from "./context/DataProvider";
import { DrawerNavigator } from "./router/DrawerNavigator";

export const App = () => {
  
  return (
    <DataProvider>
      <DrawerNavigator/>
    </DataProvider>
    
  );
}

// import { NavigationContainer } from '@react-navigation/native'
// import React from 'react'
// import { Text, View } from 'react-native'
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// export const  App = () => {
//   return (
//     <NavigationContainer>

//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
      
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



// export const Home = () => {
//   return (
//     <View className='w-[100px] bg-red-500'>
//               <Text className='text-blue-500'>Hola</Text>
//             </View>
//   )
// }
