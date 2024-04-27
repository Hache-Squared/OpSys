import React, { FC, useContext, useState } from "react";
import { MainContainer } from "../../shared/components/MainContainer";
import { Card } from "../../shared/components/Card";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackNavigatorParams } from "../../router/HomeStack";
import { DataContext } from "../../context/DataContext";
import { useFavoritesStorage } from "../../tools/hooks/useFavoritesStorage";
import { useFocusEffect } from "@react-navigation/native";
import { CardModel } from "../../types/Card";
import { Title } from "../../shared/components/Title";
import { Text, View } from "react-native";

// interface HomeProps
//   extends StackScreenProps<HomeStackNavigatorParams, "Home"> {}

export const Favorites: FC<any> = ({ navigation }) => {
  const { cardsForHome } = useContext(DataContext);
  const { getFavoriteCardIds } = useFavoritesStorage()
  const [cards, setCards] = useState<CardModel[]>([])

  // const [isFavorite, setIsFavorite] = useState<boolean>(false)
  
  // useEffect(() => {
  //   checkIsFavorite()
  // },[])
  useFocusEffect(React.useCallback(()=>{
    checkFavorites()
  },[]))

  const checkFavorites = async() => {
    let favoriteArray = await getFavoriteCardIds()
    let cards = cardsForHome?.filter((item) => favoriteArray.includes(item?.id))
    
    setCards(cards)
  }

  return (
    <MainContainer>
      <Title title="Bienvenido A Favoritos"/>

      {
        cards?.length === 0 && (
          <View className="w-11/12 p-2 bg-gray-700 items-center justify-center mt-5 self-center rounded-md">
            <Text className="text-textboxs">Aun No Tienes Favoritos</Text>
          </View>
        ) 
      }

      {cards?.map((item, index) => {
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
