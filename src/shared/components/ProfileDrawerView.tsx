import { Image, StyleSheet, Text, View } from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Logo from "../../assets/logo.png"

export const ProfileDrawerView = (props: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
        <View style={ProfileDrawerViewStyles.avatarContainer}>
            <Image source={Logo} style={ProfileDrawerViewStyles.avatarImage}/>
            <Text style={ProfileDrawerViewStyles.avatarText}>
                ¡Bienvenido A OpSys!
            </Text>
        </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}


const ProfileDrawerViewStyles = StyleSheet.create({
    avatarContainer: {
        width:"100%",
        height:200,
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 50,
        margin:10,
        // backgroundColor:"#fff"
    },
    avatarImage: {      
        width:150,
        height:150,
        objectFit:'contain'
    },
    avatarText: {
        fontWeight:"bold",
        color:"#fff"
    },

})