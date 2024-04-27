import React, { useState, useEffect, FC } from "react";
import { CardModel } from "../../../types/Card";
import { CardsData } from "../../../Data/CardsData";
interface useCardsProps {
  preventDefault?: boolean
}

const useCards = (props?: useCardsProps) => {
  const [cardsForHome, setCardsForHome] = useState<CardModel[]>([])
  useEffect(() => {
    if(!props?.preventDefault){
      getCardsForHome()
    }
  },[])

  const getCardsForHome = (): CardModel[] => {
    let data = [...CardsData];
    setCardsForHome(data)
    return data;
  };

  return {
    getCardsForHome,
    cardsForHome
  };
};

export { useCards };
