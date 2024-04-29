import React, { useContext } from 'react'
import { MainContainer } from '../../shared/components/MainContainer'
import { DataContext } from '../../context/DataContext'
import { AbourCard } from '../../shared/components/AboutCard'

export const AboutUsScreen = () => {
  const {aboutUsData} = useContext(DataContext)
  return (
    <MainContainer>
        {aboutUsData?.map((item, index) => {
        return (
          <AbourCard
            key={index}
            email={item?.email}
            id={item?.id}
            name={item?.name}
            percentage={item?.percentage}
            photo={item?.photo}
          />
        );
      })}
    </MainContainer>
  )
}
