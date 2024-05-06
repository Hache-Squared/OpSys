import { createContext } from "react";
import { CardModel } from "../types/Card";
import { AboutUsModel } from "../types/AboutUs";

export interface DataContextProps{
    cardsForHome: CardModel[],
    cardsForActivityOne: CardModel[],
    cardsForActivityTwo: CardModel[],
    cardsForActivityThree: CardModel[],
    cardsForActivityFour: CardModel[],
    aboutUsData: AboutUsModel[]
}

export const DataContext = createContext<DataContextProps>({
    cardsForHome: [],
    cardsForActivityOne: [],
    cardsForActivityTwo: [],
    cardsForActivityThree: [],
    cardsForActivityFour: [],
    aboutUsData: []
})