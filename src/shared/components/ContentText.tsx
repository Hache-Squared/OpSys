import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { AppTheme } from '../../config/AppTheme'


interface ContentTextProps {
  content: string
}

export const ContentText: FC<ContentTextProps> = ({content}) => {
  return (
    <View className='w-11/12 p-1 bg-secondary rounded-md self-center my-1' style={{backgroundColor: AppTheme.secondary}}>
        <Text className='text-black text-sm'>
            {content}
        </Text>
    </View>
  )
}
