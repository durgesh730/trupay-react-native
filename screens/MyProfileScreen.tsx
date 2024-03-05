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

const MyProfileScreen = ({ navigation }: any) => {
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

        <TextWithLine text="My Profile" />
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

export default MyProfileScreen;
