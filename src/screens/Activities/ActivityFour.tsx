import React, { FC, useContext } from "react";
import { MainContainer } from "../../shared/components/MainContainer";
import { Card } from "../../shared/components/Card";
import { StackScreenProps } from "@react-navigation/stack";
import { DataContext } from "../../context/DataContext";
import { ActivityStackNavigatorParams } from "../../router/ActivitiesStack";
import { Title } from "../../shared/components/Title";

interface HomeProps
  extends StackScreenProps<ActivityStackNavigatorParams, "Activity"> {}

export const ActivityFourScreen: FC<HomeProps> = ({ navigation }) => {
  const { cardsForActivityFour } = useContext(DataContext);
  return (
    <MainContainer>
      <Title title="Actividad Fundamental 4"/>
      {cardsForActivityFour?.map((item, index) => {
        return (
          <Card
            key={index}
            title={item?.title}
            subtitle={item?.subtitle}
            onPress={() => {
              navigation.navigate("ContentCard", {
                cardId: item?.id,
              });
            }}
          />
        );
      })}
    </MainContainer>
  );
};
