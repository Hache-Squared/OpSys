import { createContext } from "react";
import { CardModel } from "../types/Card";
import { AboutUsModel } from "../types/AboutUs";

export interface DataContextProps{
    cardsForHome: CardModel[],
    aboutUsData: AboutUsModel[]
}

export const DataContext = createContext<DataContextProps>({
    cardsForHome: [],
    aboutUsData: []
})