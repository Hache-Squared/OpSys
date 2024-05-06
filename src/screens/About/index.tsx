import React, {useContext} from 'react';
import {MainContainer} from '../../shared/components/MainContainer';
import {DataContext} from '../../context/DataContext';
import {AbourCard, AboutCardSchool} from '../../shared/components/AboutCard';
import {Text, View} from 'react-native';

export const AboutUsScreen = () => {
  const {aboutUsData} = useContext(DataContext);
  return (
    <MainContainer>
      
      {/* <View className="w-10/12 p-1 flex self-center"></View> */}
      <AboutCardSchool/>
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
