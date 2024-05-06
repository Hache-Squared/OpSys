import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
interface SubtitleProps {
    subtitle: string
}
export const Subtitle: FC<SubtitleProps> = ( { subtitle = ""} ) => {
  return (
    <View className='w-11/12 my-1 self-center'>
        <Text className='font-semibold text-sm text-textboxs text-left '>
          {subtitle}
        </Text>
    </View>
  )
}
