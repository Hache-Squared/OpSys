import { createContext } from "react";
import { CardModel } from "../types/Card";

export interface DataContextProps{
    cardsForHome: CardModel[]
}

export const DataContext = createContext<DataContextProps>({
    cardsForHome: []
})