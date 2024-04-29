import { FC, ReactElement, useState } from "react"
import { CardModel } from "../types/Card"
import { DataContext } from "./DataContext"
import { useCards } from "../tools/hooks/useCards"
import { useAboutUs } from "../tools/hooks/useAboutUs"




interface DataProviderProps {
    children: ReactElement
}

export const DataProvider: FC<DataProviderProps> = ({children}) => {
    // const [cardsForHome, setCardsForHome] = useState<CardModel[]>([])
    const { cardsForHome } = useCards()
    const {aboutUsData} = useAboutUs()
    
    return(
        <DataContext.Provider value={{
            cardsForHome,
            aboutUsData
        }}>
            {children}
        </DataContext.Provider>
    )
}