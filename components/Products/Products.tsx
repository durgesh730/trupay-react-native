import React from "react";
import { View, Text } from "react-native";
import { FONTS } from "../../constants/FONTFAMILY";
import { color1 } from "../../constants/COLORS";
import { FontAwesome5 } from '@expo/vector-icons';

const Products = ({title}:any) => {
  return (
    <>
      <View
        style={{
          marginHorizontal: 15,
          shadowOpacity: 10,
          shadowColor: "black",
          shadowRadius: 4,
          elevation: 5,
          backgroundColor: "#fff",
          paddingVertical: 10,
          borderRadius: 10,
          alignItems:"center",
          margin:"auto"
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Medium,
            color: color1,
            paddingVertical:10
          }}
        >  
          <FontAwesome5 name="money-bill-wave" size={24} color={color1} />
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Medium,
            paddingHorizontal:10
          }}
        >
          {title}
        </Text>
      </View>
    </>
  );
};

export default Products;
