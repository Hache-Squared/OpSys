import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ImageRandom } from "./ImageRandom";
import { AppTheme } from "../../config/AppTheme";


export interface CardProps {
    title?: string,
    subtitle?: string,
    onPress?: () => void
}

export const Card: FC<CardProps> = ({title, onPress,subtitle}) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={{
            // shadowColor: AppTheme.secondary, // Color de la sombra (negro con opacidad 0.5)
            // shadowOpacity: 1, // Opacidad de la sombra (0 a 1)
            // shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra (horizontal y vertical)
            // shadowRadius: 5, // Radio de difuminado de la sombra
            // elevation: 5, 
            
            borderWidth:2,
            borderColor: AppTheme.secondary,
        }}
        className=" w-11/12 h-auto self-center flex flex-col items-center justify-center  rounded-md my-2 ">
        
        <View className=" w-11/12 h-[150px] self-center flex-col items-center justify-center mt-1">
            <ImageRandom/>
        </View>
        <View className=" w-11/12  flex-col  p-2">
            <Text className="font-bold text-xl text-textboxs">
                {title}
            </Text>
        </View>
        <View className=" w-11/12 self-center flex-col items-center justify-center p-1">
            <Text className=" text-textboxs">
                {subtitle}
            </Text>
        </View>
    </TouchableOpacity>
  );
};
