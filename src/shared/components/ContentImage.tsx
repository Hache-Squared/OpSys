import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import React, {FC, useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// import { ZoomImage } from './ZoomImage';

interface ContentImageProps {
  image: any;
}
export const ContentImage: FC<ContentImageProps> = ({image}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(oldState => !oldState);
        }}
        className="w-11/12 flex bg-gray-500 items-center justify-center self-center my-2 rounded-md">
        <Image
          source={image}
          className="w-full h-[150px] object-contain rounded-md"
          // style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <GestureHandlerRootView style={{flex: 1}}>
          <View className="w-full h-screen bg-gray-700 flex flex-col items-center justify-center">
            <ImageZoom
              source={image}
              minScale={0.5}
              maxScale={5}
              doubleTapScale={3}
              minPanPointers={1}
              isSingleTapEnabled
              isDoubleTapEnabled
              resizeMode="contain"
              width={Dimensions.get("screen").width}
              height={Dimensions.get("screen").height * 0.4}
            />
          </View>
        </GestureHandlerRootView>
      </Modal>
    </>
  );
};
