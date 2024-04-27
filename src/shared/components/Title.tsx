import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
interface TitleProps {
    title: string
}
export const Title: FC<TitleProps> = ( { title = ""} ) => {
  return (
    <View className='w-full '>
        <Text className='font-bold text-textboxs text-center text-lg'>
          {title}
        </Text>
    </View>
  )
}
