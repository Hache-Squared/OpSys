import React, { useState, useEffect, FC } from "react";
import { CardModel } from "../../../types/Card";
// import { CardsData } from "../../../Data/CardsData";
import { ContentModel } from "../../../types/ContentCard";
import { ContentsData } from "../../../Data/ContentsData";
import { ActivityThreeContentsData } from "../../../Data/ActivityContents/ActivityThree";
import { ActivityOneContentsData } from "../../../Data/ActivityContents/ActivityOne";
import { ActivityFourContentsData } from "../../../Data/ActivityContents/ActivityFour";
import { ActivityTwoContentsData } from "../../../Data/ActivityContents/ActivityTwo";
interface useCardsProps {
  preventDefault?: boolean
}

const useContent = (idContent: number, props?: useCardsProps) => {
  const [content, setContent] = useState<ContentModel | null>(null)
  useEffect(() => {
    if(!props?.preventDefault){
      getContent()
    }
  },[])

  const getContent = (): ContentModel | null => {
    let data = [ ...ActivityOneContentsData, ...ActivityTwoContentsData ,...ActivityThreeContentsData, ...ActivityFourContentsData];
    let indexOfContent = data?.findIndex((item) => item?.id === idContent)
    if(indexOfContent === -1){
      return null;
    }

    let content = {...data?.[indexOfContent]};
    
    setContent(content)
    return content;
  };

  return {
    getContent,
    content
  };
};

export { useContent };
