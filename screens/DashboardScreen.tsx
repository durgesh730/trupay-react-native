import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "../constants/FONTFAMILY";
import { color1 } from "../constants/COLORS";
import Products from "../components/Products/Products";
import LeadsStats from "../components/LeadsStats/LeadsStats";
import TextWithLine from "../components/common/TextWithLine";

const DashboardScreen = ({ navigation }: any) => {
  const { height } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingBottom: 100,
            paddingTop: 20,
            paddingHorizontal: 15,
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

        <View
          style={{
            width: "100%",
            height: height * 0.18,
            backgroundColor: "#D9D9D9",
          }}
        ></View>

        <View
          style={{
            width: "90%",
            height: height * 0.18,
            backgroundColor: "#E1E1E1",
            marginHorizontal: 15,
            marginTop: 20,
            alignItems: "center",
            borderRadius: 10,
            paddingTop: 5,
          }}
        >
          <Text style={{ fontFamily: FONTS.Medium }}>NEWS ALERT</Text>
        </View>

        {/* card */}
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: 10,
          }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <TextWithLine text="MY EARNING" />
          </View>

          <View
            style={{
              marginHorizontal: 15,
              shadowOpacity: 10,
              shadowColor: "black",
              shadowRadius: 20,
              elevation: 10,
              backgroundColor: "#fff",
              paddingVertical: 10,
              borderRadius: 10,
              marginTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: 20,
                paddingHorizontal: 15,
                paddingBottom: 60,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: FONTS.Medium,
                  color: color1,
                }}
              >
                JANUARY GMV
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: FONTS.Medium,
                  color: color1,
                }}
              >
                JANUARY PAYOUT
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: 20,
                paddingHorizontal: 15,
                paddingBottom: 100,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONTS.Medium,
                  color: color1,
                }}
              >
                TEAM
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONTS.Medium,
                }}
              >
                LOANS
              </Text>
            </View>
          </View>
        </View>

        {/* PRODUCT */}
        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 40,
          }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <TextWithLine text="PRODUCTS" />
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingTop: 20,
              paddingBottom: 30,
              width: "100%",
              margin: "auto",
            }}
          >
            <View style={{ width: "50%" }}>
              <Products title={"Personal Loan"} />
            </View>

            <View style={{ width: "50%" }}>
              <Products title={"Home Loan"} />
            </View>
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingBottom: 40,
              width: "100%",
            }}
          >
            <View style={{ width: "50%" }}>
              <Products title={"Business Loan"} />
            </View>

            <View style={{ width: "50%" }}>
              <Products title={"Loan Against Property"} />
            </View>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 15,
          }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <TextWithLine text="LEADS STATS" />
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingTop: 20,
              paddingBottom: 30,
              width: "100%",
              margin: "auto",
            }}
          >
            <View style={{ width: "50%" }}>
              <LeadsStats title={"Gerneral"} desc={"123654"} />
            </View>

            <View style={{ width: "50%" }}>
              <LeadsStats title={"Eligible"} desc={"123654"} />
            </View>
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingBottom: 40,
              width: "100%",
            }}
          >
            <View style={{ width: "50%" }}>
              <LeadsStats title={"Confirm"} desc={"123654"} />
            </View>

            <View style={{ width: "50%" }}>
              <LeadsStats title={"Reject"} desc={"123654"} />
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 10 }}>
          <TextWithLine text=" LEADS Table" />
        </View>

        <View
          style={{
            width: "90%",
            height: height * 0.18,
            backgroundColor: "#E1E1E1",
            marginHorizontal: 15,
            marginTop: 20,
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
    color: color1,
  },
});

export default DashboardScreen;
