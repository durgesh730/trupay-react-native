import React from "react";
import { Text, View } from "react-native";
import { labelColor } from "../../constants/COLORS";
import { FONTS } from "../../constants/FONTFAMILY";
import Input from "../common/Input";

const Login = () => {
  return (
    <>
      <View style={{ paddingTop:10}}>
        <Text
          style={{
            fontSize: 14,
            color: labelColor,
            marginBottom: 0,
            fontFamily: FONTS.Medium,
          }}
        >
          Email Address*
        </Text>
        <Input placeholder="@  Enter your email address" />
      </View>
      
      <View style={{ paddingTop:10}} >
        <Text
          style={{
            fontSize: 14,
            color: labelColor,
            fontFamily: FONTS.Medium,
          }}
        >
          Password*
        </Text>
        <Input placeholder="|**  Enter your password" />
      </View>
    </>
  );
};

export default Login;
