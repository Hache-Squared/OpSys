import React, { FC } from 'react'
import { Image, View } from 'react-native'

interface ContentImageProps {
    image: any
}
export const ContentImage: FC<ContentImageProps> = ({image}) => {
  return (
    <View className='w-11/12 flex bg-gray-500 items-center justify-center self-center my-2 rounded-md'>

        <Image
        source={image} 
        className="w-full h-[150px] object-contain rounded-md" 
        // style={{ width: 200, height: 200 }} 
        />
    </View>
  )
}
