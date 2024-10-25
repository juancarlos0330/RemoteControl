import * as React from "react";
import { Text, View } from "react-native";

const Rule = (props) => {
  return (
    <View style={{ alignItems: "center", width: "3.8%" }}>
      <View style={{ backgroundColor: "#fff", width: 2, height: 8 }} />
      <Text style={{ color: "#fff", fontSize: 12 }}>{props.text}</Text>
    </View>
  );
};

export default Rule;
