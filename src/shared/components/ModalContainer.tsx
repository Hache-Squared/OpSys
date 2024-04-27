import React, { useEffect, ReactNode } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  RefreshControl,
  Button,
  Dimensions,
  Modal,
  ScrollView,
} from "react-native";

interface ModalContainerProps {
  children: ReactNode;
  visible: boolean;
  onRequestClose?: () => void;
  onCreate?: () => void;
}

const ModalContainer = ({
  children,
  visible,
  onRequestClose,
  onCreate = () => null,
}: ModalContainerProps) => {
  const width_screen = Dimensions.get("window").width;
  const height_screen = Dimensions.get("window").height;

  useEffect(() => {
    onCreate();
  }, []);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      onRequestClose={onRequestClose}
      visible={visible}
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          width: width_screen,
          height: height_screen,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(1,1,1,.7)",
        }}
      >
        <View
          style={{
            width: width_screen * 0.9,
            height: height_screen * 0.9,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              width: width_screen * 0.9,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export { ModalContainer };
