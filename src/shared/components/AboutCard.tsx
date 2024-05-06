import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AppTheme} from '../../config/AppTheme';

export interface AbourCardProps {
  photo?: any;
  name?: string;
  id?: string;
  email?: string;
  career?: string;
  percentage?: string;
}

export const AbourCard: FC<AbourCardProps> = ({
  photo,
  name,
  id,
  email,
  percentage,
  career,
}) => {
  return (
    <>
      <View
        className="w-11/12 self-center p-0.5"
        style={{backgroundColor: AppTheme.secondary}}
      />
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
          <Text className="font-bold text-textboxs text-sm">Nombre:</Text>
          <Text className="font-bold text-textboxs text-sm">{name}</Text>
        </View>
        <View className=" w-11/12 self-center flex-row text-left gap-1 p-1">
          <Text className="font-bold text-textboxs text-sm">Matricula:</Text>
          <Text className=" text-textboxs text-sm">{id}</Text>
        </View>
        <View className=" w-11/12 self-center flex-row text-left gap-1 p-1">
          <Text className="font-bold text-textboxs text-sm">Carrera:</Text>
          <Text className=" text-textboxs text-sm">{career}</Text>
        </View>

        <View className=" w-11/12 self-center flex-row text-left gap-1 p-1">
          <Text className="font-bold text-textboxs text-sm">Correo:</Text>
          <Text className=" text-textboxs text-sm">{email}</Text>
        </View>

        <View className=" w-11/12 self-center flex-row text-left gap-1 p-1">
          <Text className="font-bold text-textboxs text-sm">Porcentaje:</Text>
          <Text className=" text-textboxs text-sm">{percentage}</Text>
        </View>
      </View>
      <View
        className="w-11/12 self-center p-0.5"
        style={{backgroundColor: AppTheme.secondary}}
      />
    </>
  );
};

export const AboutCardSchool = () => {
  return (
    <>
      <View
        className="w-11/12 self-center p-0.5"
        style={{backgroundColor: AppTheme.secondary}}
      />

      <View className="w-11/12 mx-1 my-3 flex flex-col gap-2  self-center">
        <View className="flex flex-row flex-wrap  gap-2 font-semibold text-white text-left">
          <Text className="font-bold text-textboxs text-sm">Universidad: </Text>
          <Text className="">
            FACULTAD DE INGENIERIA MECANICA Y ELECTRICA (FIME) - UANL
          </Text>
        </View>
        <View className="flex flex-row flex-wrap  gap-2 font-semibold text-white text-left">
          <Text className="font-bold text-textboxs text-sm">Materia: </Text>
          <Text className="">SISTEMAS OPERATIVOS CLASE ORDINARIA</Text>
        </View>
        <View className="flex flex-row flex-wrap  gap-2 font-semibold text-white text-left">
          <Text className="font-bold text-textboxs text-sm">Grupo: </Text>
          <Text className="">006 E2024</Text>
        </View>
        <View className="flex flex-row flex-wrap  gap-2 font-semibold text-white text-left">
          <Text className="font-bold text-textboxs text-sm">Catedratica: </Text>
          <Text className="">NORMA EDITH MARIN MARTINEZ</Text>
        </View>
      </View>
      <View
        className="w-11/12 self-center p-0.5"
        style={{backgroundColor: AppTheme.secondary}}
      />
    </>
  );
};
