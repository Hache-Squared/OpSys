import React, { FC, useContext } from "react";
import { MainContainer } from "../../shared/components/MainContainer";
import { Card } from "../../shared/components/Card";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackNavigatorParams } from "../../router/HomeStack";
import { DataContext } from "../../context/DataContext";

interface HomeProps
  extends StackScreenProps<HomeStackNavigatorParams, "Home"> {}

export const Home: FC<HomeProps> = ({ navigation }) => {
  const { cardsForHome } = useContext(DataContext);
  return (
    <MainContainer>
      {cardsForHome?.map((item, index) => {
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
