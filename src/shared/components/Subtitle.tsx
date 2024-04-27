import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
interface SubtitleProps {
    subtitle: string
}
export const Subtitle: FC<SubtitleProps> = ( { subtitle = ""} ) => {
  return (
    <View className='w-full my-1'>
        <Text className='font-semibold text-sm text-textboxs text-left '>
          {subtitle}
        </Text>
    </View>
  )
}
