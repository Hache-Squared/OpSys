import React, { useState, useEffect, FC } from "react";
import { CardModel } from "../../../types/Card";
import { ActivityFourCardsData, ActivityOneCardsData, ActivityThreeCardsData, ActivityTwoCardsData, CardsData } from "../../../Data/CardsData";
interface useCardsProps {
  preventDefault?: boolean,
  useActivityOne?: boolean,
  useActivityTwo?: boolean,
  useActivityThree?: boolean,
  useActivityFour?: boolean,
}

const useCards = (props?: useCardsProps) => {
  const [cardsForHome, setCardsForHome] = useState<CardModel[]>([])
  const [cardsForActivityOne, setCardsForActivityOne] = useState<CardModel[]>([])
  const [cardsForActivityTwo, setCardsForActivityTwo] = useState<CardModel[]>([])
  const [cardsForActivityThree, setCardsForActivityThree] = useState<CardModel[]>([])
  const [cardsForActivityFour, setCardsForActivityFour] = useState<CardModel[]>([])

  useEffect(() => {
    if(!props?.preventDefault){
      getCardsForHome()
      getCardsForActivityOne()
      getCardsForActivityTwo()
      getCardsForActivityThree()
      getCardsForActivityFour()
    }
    else if(props?.useActivityOne){
      getCardsForActivityOne()
    }
    else if(props?.useActivityTwo){
      getCardsForActivityTwo()
    }
    else if(props?.useActivityThree){
      getCardsForActivityThree()
    }
    else if(props?.useActivityFour){
      getCardsForActivityFour()
    }
  },[])

  const getCardsForHome = (): CardModel[] => {
    let data = [...CardsData];
    setCardsForHome(data)
    return data;
  };

  const getCardsForActivityOne = (): CardModel[] => {
    let data = [...ActivityOneCardsData];
    setCardsForActivityOne(data)
    return data;
  };
  
  const getCardsForActivityTwo = (): CardModel[] => {
    let data = [...ActivityTwoCardsData];
    setCardsForActivityTwo(data)
    return data;
  };
  
  const getCardsForActivityThree = (): CardModel[] => {
    let data = [...ActivityThreeCardsData];
    setCardsForActivityThree(data)
    return data;
  };

  const getCardsForActivityFour = (): CardModel[] => {
    let data = [...ActivityFourCardsData];
    setCardsForActivityFour(data)
    return data;
  };

  return {
    getCardsForHome,
    getCardsForActivityOne,
    getCardsForActivityTwo,
    getCardsForActivityThree,
    getCardsForActivityFour,
    cardsForActivityOne,
    cardsForActivityTwo,
    cardsForActivityThree,
    cardsForActivityFour,
    cardsForHome
  };
};

export { useCards };
