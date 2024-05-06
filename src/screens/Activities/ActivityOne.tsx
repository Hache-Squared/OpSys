import React, { FC, useContext } from "react";
import { MainContainer } from "../../shared/components/MainContainer";
import { Card } from "../../shared/components/Card";
import { StackScreenProps } from "@react-navigation/stack";
import { DataContext } from "../../context/DataContext";
import { ActivityStackNavigatorParams } from "../../router/ActivitiesStack";

interface HomeProps
  extends StackScreenProps<ActivityStackNavigatorParams, "Activity"> {}

export const ActivityOneScreen: FC<HomeProps> = ({ navigation }) => {
  const { cardsForActivityOne } = useContext(DataContext);
  return (
    <MainContainer>
      {cardsForActivityOne?.map((item, index) => {
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
