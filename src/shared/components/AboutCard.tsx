import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppTheme } from "../../config/AppTheme";

export interface AbourCardProps {
    photo?:any,
    name?: string,
    id?: string,
    email?: string,
    career?: string,
    percentage?: string,

}

export const AbourCard: FC<AbourCardProps> = ({photo,name, id, email,  percentage, career}) => {
  return (
    <>
    <View className="w-11/12 self-center p-0.5" style={{backgroundColor:AppTheme.secondary}}/>
    <View
        // style={{backgroundColor: AppTheme.secondary}}
        className={` w-11/12 self-center h-[300px] flex-col items-center justify-center  rounded-md shadow-md shadow-[${AppTheme.secondary}] my-2`}>
        <View className=" w-11/12 self-center flex-col items-center justify-center ">
            <Image 
                source={photo} 
                className="w-[100px] h-[100px] object-cover rounded-md" 
            />
        </View>
        <View className=" w-11/12 self-center flex-row text-left gap-1 p-1">
            <Text className="font-bold text-textboxs text-sm">
                Nombre:
            </Text>
            <Text className="font-bold text-textboxs text-sm">
                {name}
            </Text>
        </View>
        <View className=" w-11/12 self-center flex-row text-left gap-1 p-1">
            <Text className="font-bold text-textboxs text-sm">
                Matricula:
            </Text>
            <Text className=" text-textboxs text-sm">
                {id}
            </Text>
        </View>
        <View className=" w-11/12 self-center flex-row text-left gap-1 p-1">
            <Text className="font-bold text-textboxs text-sm">
                Carrera:
            </Text>
            <Text className=" text-textboxs text-sm">
                {career}
            </Text>
        </View>
        
        <View className=" w-11/12 self-center flex-row text-left gap-1 p-1">
            <Text className="font-bold text-textboxs text-sm">
                Correo:
            </Text>
            <Text className=" text-textboxs text-sm">
                {email}
            </Text>
        </View>
        
        <View className=" w-11/12 self-center flex-row text-left gap-1 p-1">
            <Text className="font-bold text-textboxs text-sm">
                Porcentaje:
            </Text>
            <Text className=" text-textboxs text-sm">
                {percentage}
            </Text>
        </View>
    </View>
    <View className="w-11/12 self-center p-0.5" style={{backgroundColor:AppTheme.secondary}}/>
    </>
  );
};
