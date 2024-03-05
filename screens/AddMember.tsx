import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "../constants/FONTFAMILY";
import { color1 } from "../constants/COLORS";
import InputWithIcon from "../components/common/InputWithIcon";
import { FontAwesome6 } from "@expo/vector-icons";
import Button from "../components/common/Button";
import { Feather } from "@expo/vector-icons";
import TextWithLine from "../components/common/TextWithLine";

const AddMember = ({ navigation }: any) => {
  const handleSignInPress = () => {};

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

        {/* card */}
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: 100,
          }}
        >
          <View style={{ paddingHorizontal: 70 }}>
            <TextWithLine text="ADD NEW MEMBER" />
          </View>

          <View style={{ paddingTop: 20, paddingHorizontal: 10 }}>
            <Text
              style={{
                fontFamily: FONTS.Medium,
                color: "#535353",
                paddingBottom: 5,
              }}
            >
              User Type
            </Text>
            <InputWithIcon
              Icon={
                <FontAwesome6 name="user-large" size={20} color="#9DA3AE" />
              }
              placeholder="Select User Type"
            />
          </View>

          <View style={{ paddingTop: 20, paddingHorizontal: 10 }}>
            <Text
              style={{
                fontFamily: FONTS.Medium,
                color: "#535353",
                paddingBottom: 5,
              }}
            >
              Name
            </Text>
            <InputWithIcon
              Icon={
                <Text
                  style={{
                    fontFamily: FONTS.Medium,
                    color: "#9DA3AE",
                  }}
                >
                  Aa
                </Text>
              }
              placeholder="Enter Email Address"
            />
          </View>

          <View style={{ paddingTop: 20, paddingHorizontal: 10 }}>
            <Text
              style={{
                fontFamily: FONTS.Medium,
                color: "#535353",
                paddingBottom: 5,
              }}
            >
              Email
            </Text>
            <InputWithIcon
              Icon={
                <Text
                  style={{
                    fontFamily: FONTS.Medium,
                    color: "#9DA3AE",
                  }}
                >
                  @
                </Text>
              }
              placeholder="Phone Number"
            />
          </View>

          <View style={{ paddingTop: 20, paddingHorizontal: 10 }}>
            <Text
              style={{
                fontFamily: FONTS.Medium,
                color: "#535353",
                paddingBottom: 5,
              }}
            >
              Phone
            </Text>
            <InputWithIcon
              Icon={<Feather name="phone" size={24} color={"#D2D5DA"} />}
              placeholder="Select User Type"
            />
          </View>

          <View style={{ paddingTop: 20, paddingHorizontal: 10 }}>
            <Text
              style={{
                fontFamily: FONTS.Medium,
                color: "#535353",
                paddingBottom: 5,
              }}
            >
              Monthly Turnover
            </Text>
            <InputWithIcon
              Icon={
                <Text
                  style={{
                    fontFamily: FONTS.Medium,
                    color: "#9DA3AE",
                  }}
                >
                  ₹
                </Text>
              }
              placeholder="Enter Monthly Turnover"
            />
          </View>
        </View>

        <View
          style={{ paddingHorizontal: 10, paddingBottom: 30, paddingTop: 20 }}
        >
          <Button
            title="Submit"
            isActive={true}
            handleSignInPress={handleSignInPress}
          />
        </View>
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

export default AddMember;
