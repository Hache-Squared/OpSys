import React, { ReactNode } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import { AppTheme } from "../../config/AppTheme";

interface MainContainerProps {
  children: ReactNode;
  backgroundColor?: string;
  header?: boolean;
}

const { width, height } = Dimensions.get("window");

const MainContainer = ({
  children,
  backgroundColor = AppTheme.primary,
  header,
}: MainContainerProps) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        flex: header ? (12 / 13) : 1,
        backgroundColor: backgroundColor,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {/* <StatusBar backgroundColor={"#00a8ff"} /> */}
      <ScrollView>
        <View
          style={{
            width: width,
            backgroundColor: backgroundColor,
            // justifyContent: "flex-start",
            // alignItems: "center",
          }}
        >
          {children}
        </View>
      </ScrollView>
    </View>
  );
};

export { MainContainer };
