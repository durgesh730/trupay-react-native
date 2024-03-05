import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "../constants/FONTFAMILY";
import { color1 } from "../constants/COLORS";
import TextWithLine from "../components/common/TextWithLine";

const MyTeamScreen = ({ navigation }: any) => {
  const { height } = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor={color1} barStyle="dark-content" />
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingBottom: 40,
            paddingTop: 20,
            paddingHorizontal: 15,
            backgroundColor: color1,
          }}
        >
          <View>
            <Text style={styles.heading}>Shashank</Text>
            <Text
              style={{
                fontSize: 14,
                paddingHorizontal: 12,
                fontFamily: FONTS.Medium,
              }}
            >
              ADMIN
            </Text>
          </View>
          <Text style={{ fontSize: 14, fontFamily: FONTS.Medium }}>P</Text>
        </View>

        <View style={{paddingHorizontal:50}}> 
          <TextWithLine text="ADDED USER TABLE" />
        </View>
        
        <View
          style={{
            width: "90%",
            height: height * 0.5,
            backgroundColor: "#E1E1E1",
            marginHorizontal: 15,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            paddingTop: 5,
            marginBottom: 20,
          }}
        ></View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: FONTS.SemiBold,
    color: "#fff",
  },
});

export default MyTeamScreen;
