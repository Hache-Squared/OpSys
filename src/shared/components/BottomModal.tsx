import React, { ReactNode } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BottomSheet } from "react-native-btr";

interface BottomModalProps {
  visible: boolean;
  closeModal: () => void;
  children: ReactNode;
  heightReference?: number;
}

const BottomModal: React.FC<BottomModalProps> = ({
  visible,
  closeModal,
  children,
  heightReference = 3,
}) => {
  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
    >
      <View
        style={{
          backgroundColor: "white",
          flex: heightReference / 5,
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        {children}
      </View>
    </BottomSheet>
  );
};

export { BottomModal };

const styles = StyleSheet.create({});
