import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headertext}>
        {new Date().getDate() +
          "/" +
          Number(new Date().getMonth() + 1) +
          "/" +
          new Date().getFullYear()}{" "}
        {(new Date().getHours() >= 10
          ? new Date().getHours()
          : "0" + new Date().getHours()) +
          ":" +
          (new Date().getMinutes() >= 10
            ? new Date().getMinutes()
            : "0" + new Date().getMinutes()) +
          " " +
          " "}
        {new Date().getDay() === 6
          ? "SAT"
          : new Date().getDay() === 5
          ? "FRI"
          : new Date().getDay() === 4
          ? "THU"
          : new Date().getDay() === 3
          ? "WED"
          : new Date().getDay() === 2
          ? "TUE"
          : new Date().getDay() === 1
          ? "MON"
          : "SUN"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 50,
    position: "absolute",
    top: "10%",
  },
  headertext: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
  },
});
