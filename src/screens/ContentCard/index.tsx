import React, { FC, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MainContainer } from '../../shared/components/MainContainer'
import { ContentText } from '../../shared/components/ContentText'
import { ContentImage } from '../../shared/components/ContentImage'
import { Title } from '../../shared/components/Title'
import { Subtitle } from '../../shared/components/Subtitle'
import { useContent } from '../../tools/hooks/useContent'
import { StackScreenProps } from '@react-navigation/stack'
import { HomeStackNavigatorParams } from '../../router/HomeStack'
import { ContentTypes } from '../../types/ContentCard'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFavoritesStorage } from '../../tools/hooks/useFavoritesStorage'
import { AppTheme } from '../../config/AppTheme'

interface ContentCardProps extends StackScreenProps<HomeStackNavigatorParams, "ContentCard"> {
    title?: string,
}

export const ContentCard: FC<ContentCardProps> = ({title, route}) => {
  const { content } = useContent(route.params.cardId ?? 0)
  const { loading, isFavorite, saveFavoriteCard, removeFavoriteCardById} = useFavoritesStorage({
    cardId: route.params.cardId ?? 0
  })
  

  const addToFavorites = async() => {
    await saveFavoriteCard(route.params.cardId ?? 0)
  }
  const removeOfFavorites = async() => {
    await removeFavoriteCardById(route.params.cardId ?? 0)
  }

  return (
    <MainContainer>

      

      <View className='w-full py-0.5 flex-row items-center justify-end'>
        {
          (!isFavorite) ? (
            <TouchableOpacity 
              onPress={() => {
                addToFavorites()
              }}
              className='p-1 flex-row flex-nowrap gap-1 items-center justify-center mr-2'>
                <Ionicons name="heart-outline" size={32} color="#fff" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              onPress={() => {
                removeOfFavorites()
              }}
              className='p-1 flex-row flex-nowrap gap-1 items-center justify-center mr-2'>
              <Ionicons name="heart" size={32} color={AppTheme.secondary} />
            </TouchableOpacity>
          )
        }
        
      </View>

      <View className='w-full mt-0.5 mb-2'>

        <Title title={content?.title ?? "Titulo"}/>
      </View>

      {
        content?.content?.map((item, index) => {
          if(item?.type === ContentTypes.Image){
            return(
              <ContentImage
                key={index}
                image={item?.content}
              />
            )
          }else if(item?.type === ContentTypes.Subtitle) {
            return(
              <Subtitle 
                subtitle={item?.content}
                key={index}
              />
            )
          }
          else if(item?.type === ContentTypes.Text) {
            return(
              <ContentText
                content={item?.content}
                key={index}
              />
            )
          }
        })
      }

      <View className='my-4'/>

    </MainContainer>
  )
}
