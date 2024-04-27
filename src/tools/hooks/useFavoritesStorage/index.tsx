import React, { useState, useEffect, FC } from "react";
import { CardModel } from "../../../types/Card";
import { CardsData } from "../../../Data/CardsData";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface useFavoritesStorageProps {
  cardId?: number,
  preventDefault?: boolean
}

const useFavoritesStorage = (props?: useFavoritesStorageProps) => {
  let key = "favorite-cards";
  
  const [loading, setLoading] = useState<boolean>(false)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useEffect(() => {
    if(props?.cardId){
      isInFavoriteCardIds(props?.cardId)
    }
  },[])

  const getFavoriteCardIds = async(): Promise<number[]> => {
    setLoading(true)
    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        let jsonDecoded: number[] = JSON.parse(value)
        setLoading(false)
        return jsonDecoded;
      }
      setLoading(false)
      return [];
    } catch (e) {
      setLoading(false)
      return [];
    }
  };

  const saveFavoriteCard = async(cardId: number): Promise<boolean> => {
    setLoading(true)
    try {
      let currentFavoriteCardIds = await getFavoriteCardIds();
      const conjuntoIDs = new Set(currentFavoriteCardIds);
      if (!conjuntoIDs.has(cardId)) {
        conjuntoIDs.add(cardId); 
      }
      let newArray = Array.from(conjuntoIDs);
      const jsonValue = JSON.stringify(newArray);
      await AsyncStorage.setItem(key, jsonValue);
      setIsFavorite(true)
      setLoading(false)
      return true;
    } catch (e) {
      setLoading(false)
      return false;
    }
  };

  const removeFavoriteCardById = async(cardId: number): Promise<boolean> => {
    setLoading(true)
    try {
      let currentFavoriteCardIds = await getFavoriteCardIds();
      let index = currentFavoriteCardIds?.findIndex(item => item === cardId);
      currentFavoriteCardIds?.splice(index,1)
      
      const jsonValue = JSON.stringify(currentFavoriteCardIds);
      await AsyncStorage.setItem(key, jsonValue);
      setLoading(false)
      setIsFavorite(false)
      return true;
    } catch (e) {
      setLoading(false)
      return false;
    }
  };

  const isInFavoriteCardIds = async(cardId: number): Promise<boolean> => {
    setLoading(true)
    try {
      let currentFavoriteCardIds = await getFavoriteCardIds();
      let isFavorite = currentFavoriteCardIds?.includes(cardId)
      setLoading(false)
      setIsFavorite(isFavorite)
      return isFavorite;
    } catch (e) {
      setLoading(false)
      return false;
    }
  };

  return {
    loading,
    isFavorite,
    getFavoriteCardIds,
    saveFavoriteCard,
    isInFavoriteCardIds,
    removeFavoriteCardById
  };
};

export { useFavoritesStorage };
