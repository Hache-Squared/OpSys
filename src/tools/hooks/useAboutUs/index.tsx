import React, { useState, useEffect, FC } from "react";
import { CardModel } from "../../../types/Card";
import { AboutUsModel } from "../../../types/AboutUs";
import { AboutUsData } from "../../../Data/AboutUsData";

interface useAboutUsProps {
  preventDefault?: boolean
}

const useAboutUs = (props?: useAboutUsProps) => {
  const [aboutUsData, setAboutUsData] = useState<AboutUsModel[]>([])
  useEffect(() => {
    if(!props?.preventDefault){
      getAboutUsData()
    }
  },[])

  const getAboutUsData = (): AboutUsModel[] => {
    let data = [...AboutUsData];
    setAboutUsData(data)
    return data;
  };

  return {
    getAboutUsData,
    aboutUsData
  };
};

export { useAboutUs };
