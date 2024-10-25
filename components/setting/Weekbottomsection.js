import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Weekbottomsection = (props) => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.bottomline}></View>

      <View style={styles.bottomsection}>
        <TouchableOpacity
          style={styles.bottomview}
          onPress={() => props.setrouteflagfunc("Home")}
        >
          <Text style={styles.bottomtext}>ok</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomview}
          onPress={() => props.setrouteflagfunc("Weekly")}
        >
          <Text style={styles.bottomtext}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomviewleft}
          disabled
        ></TouchableOpacity>
        <TouchableOpacity style={styles.bottomviewleft}></TouchableOpacity>
        <TouchableOpacity style={styles.bottomviewleft}></TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.lastsetbtns}
          onPress={() => props.setrouteflagfunc("Home")}
        >
          <Text>
            <Icon name="home" size={62} color="#fff" />
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomline: {
    width: "100%",
    height: 2,
    backgroundColor: "#0000f8",
  },
  bottomsection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 10,
  },
  lastsetbtns: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#404080",
    padding: 5,
  },
  bottomview: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    width: 105,
    paddingTop: 8,
    paddingBottom: 8,
  },
  bottomviewleft: {
    backgroundColor: "transparent",
    borderColor: "#fff",
    width: 40,
    paddingTop: 8,
    paddingBottom: 8,
  },
  bottomtext: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 4,
    textTransform: "uppercase",
  },
});

export default Weekbottomsection;
