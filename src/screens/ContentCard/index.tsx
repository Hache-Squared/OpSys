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
// import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { useFavoritesStorage } from '../../tools/hooks/useFavoritesStorage'
import { useFocusEffect } from '@react-navigation/native'
import { LoadingComponent } from '../../shared/components/LoadingComponent'
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

      <Title title={content?.title ?? "Titulo"}/>
      {/* {
        loading ? (
          <LoadingComponent/>
        ) : (
        )
      } */}

      <View className='w-full py-2 flex-row items-center justify-end'>
        {
          (!isFavorite) ? (
            <TouchableOpacity 
              onPress={() => {
                addToFavorites()
              }}
              className='p-2 flex-row flex-nowrap gap-2 items-center justify-center mr-2'>
                {/* <Text className='text-textboxs'>Añadir A Favoritos</Text> */}
                <Ionicons name="heart-outline" size={32} color="#fff" />
                {/* <Icon name="rocket" size={30} color="#900" /> */}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              onPress={() => {
                removeOfFavorites()
              }}
              className='p-2 flex-row flex-nowrap gap-2 items-center justify-center mr-2'>
              {/* <Text className='text-textboxs'>Remover De Favoritos</Text> */}
              <Ionicons name="heart" size={32} color={AppTheme.secondary} />
            </TouchableOpacity>
          )
        }
        
      </View>

      {
        content?.content?.map((item, index) => {
          if(item?.type === ContentTypes.Image){
            return(
              <ContentImage
                key={index}
                uri={item?.content}
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
