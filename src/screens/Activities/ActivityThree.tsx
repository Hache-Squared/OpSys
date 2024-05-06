import React, { FC, useContext } from "react";
import { MainContainer } from "../../shared/components/MainContainer";
import { Card } from "../../shared/components/Card";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackNavigatorParams } from "../../router/HomeStack";
import { DataContext } from "../../context/DataContext";
import { ActivityStackNavigatorParams } from "../../router/ActivitiesStack";

interface HomeProps
  extends StackScreenProps<ActivityStackNavigatorParams, "Activity"> {}

export const ActivityThreeScreen: FC<HomeProps> = ({ navigation }) => {
  const { cardsForActivityThree } = useContext(DataContext);
  return (
    <MainContainer>
      {cardsForActivityThree?.map((item, index) => {
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
