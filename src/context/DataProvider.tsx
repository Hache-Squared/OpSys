import { FC, ReactElement, useState } from "react"
import { CardModel } from "../types/Card"
import { DataContext } from "./DataContext"
import { useCards } from "../tools/hooks/useCards"



interface DataProviderProps {
    children: ReactElement
}

export const DataProvider: FC<DataProviderProps> = ({children}) => {
    // const [cardsForHome, setCardsForHome] = useState<CardModel[]>([])
    const { cardsForHome } = useCards()
    
    return(
        <DataContext.Provider value={{
            cardsForHome
        }}>
            {children}
        </DataContext.Provider>
    )
}