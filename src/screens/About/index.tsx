import React, {useContext} from 'react';
import {MainContainer} from '../../shared/components/MainContainer';
import {DataContext} from '../../context/DataContext';
import {AbourCard, AboutCardMission, AboutCardSchool} from '../../shared/components/AboutCard';
import {Text, View} from 'react-native';
import { Title } from '../../shared/components/Title';

export const AboutUsScreen = () => {
  const {aboutUsData} = useContext(DataContext);
  return (
    <MainContainer>
      
      <AboutCardMission/>
      
      <View className='my-2'>
        <Title title='Universidad'/>
      </View>

      <AboutCardSchool/>

      <View className='my-2'>
        <Title title='Integrantes - Equipo 4'/>
      </View>

      {aboutUsData?.map((item, index) => {
        return (
          <AbourCard
            key={index}
            email={item?.email}
            career={item?.career}
            id={item?.id}
            name={item?.name}
            percentage={item?.percentage}
            photo={item?.photo}
          />
        );
      })}
    </MainContainer>
  );
};
