import React from "react";
import { View, Text } from "react-native";
import { FONTS } from "../../constants/FONTFAMILY";
import { color1 } from "../../constants/COLORS";

const LeadsStats = ({title, desc}:any) => {
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
            paddingHorizontal:10
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Medium,
            color: color1,
            paddingVertical:10
          }}
        > 
        { desc } 
        </Text>
      </View>
    </>
  );
};

export default LeadsStats;
