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
import Products from "../components/Products/Products";
import LeadsStats from "../components/LeadsStats/LeadsStats";
import TextWithLine from "../components/common/TextWithLine";

const ReportScreen = ({ navigation }: any) => {
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

        {/* PRODUCT */}
        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 40,
          }}
        >
          <View style={{ paddingHorizontal: 45 }}>
            <TextWithLine text="REPORT & ANLYTICS" />
          </View>

          <Text
            style={{
              fontFamily: FONTS.Medium,
              textAlign: "center",
              fontSize: 10,
              paddingVertical: 10,
            }}
          >
            MT PERFORMANCE
          </Text>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 30,
              width: "100%",
              margin: "auto",
            }}
          >
            <View style={{ width: "50%" }}>
              <LeadsStats desc={"123654"} title={"TOTAL PAYOUT"} />
            </View>

            <View style={{ width: "50%" }}>
              <LeadsStats desc={"123654"} title={"ATTRIBUTED LEADS"} />
            </View>
          </View>

          <View
            style={{
              paddingBottom: 40,
              width: "100%",
            }}
          >
            <LeadsStats desc={"123654"} title={"TOTAL GMV TILL NOW"} />
          </View>
        </View>

        <View style={{ paddingHorizontal: 70 }}>
          <TextWithLine text="MONTHLY MIS REPORT" />
        </View>

        <View
          style={{
            width: "90%",
            height: height * 0.18,
            backgroundColor: "#E1E1E1",
            marginHorizontal: 15,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            paddingTop: 5,
            marginBottom: 20,
          }}
        ></View>

        <View style={{ paddingHorizontal: 80 }}>
          <TextWithLine text=" MY TEAM PERFORMANCE" />
        </View>

        <View
          style={{
            width: "90%",
            height: height * 0.18,
            backgroundColor: "#E1E1E1",
            marginHorizontal: 15,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            paddingTop: 5,
            marginBottom: 50,
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

export default ReportScreen;
