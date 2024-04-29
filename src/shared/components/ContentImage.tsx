import React, { FC } from 'react'
import { Image, View } from 'react-native'

interface ContentImageProps {
    uri: string
}
export const ContentImage: FC<ContentImageProps> = ({uri}) => {
  return (
    <View className='w-11/12 flex bg-gray-500 items-center justify-center self-center my-2 rounded-md'>

        <Image
        source={{uri: uri}} 
        className="w-full h-[150px] object-contain rounded-md" 
        // style={{ width: 200, height: 200 }} 
        />
    </View>
  )
}
