import React from "react";
import {View, TextInputProps, Text } from "react-native";
import { FONTS } from "../../constants/FONTFAMILY";

interface InputWithIconProps extends TextInputProps {
  text?: string;
}

const TextWithLine: React.FC<InputWithIconProps> = ({ text }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        margin: "auto",
        gap: 10,
      }}
    >
      <View
        style={{
          width: "30%",
          height: 1,
          backgroundColor: "#898A8D",
          alignContent: "center",
        }}
      ></View>
      <Text style={{ fontFamily: FONTS.Medium, textAlign: "center" }}>
        {text}
      </Text>
      <View
        style={{ width: "30%", height: 1, backgroundColor: "#898A8D" }}
      ></View>
    </View>
  );
};

export default TextWithLine;
