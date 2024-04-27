import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ImageRandom } from "./ImageRandom";


export interface CardProps {
    title?: string,
    subtitle?: string,
    onPress?: () => void
}

export const Card: FC<CardProps> = ({title, onPress,subtitle}) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        className=" w-11/12 self-center min-h-[200px] flex-col items-center justify-center  rounded-md shadow-md shadow-slate-700 my-2">
        <View className=" w-11/12 self-center flex-col items-center justify-center ">
            <ImageRandom/>
        </View>
        <View className=" w-11/12 self-center flex-col items-center justify-center p-2">
            <Text className="font-bold text-textboxs">
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
