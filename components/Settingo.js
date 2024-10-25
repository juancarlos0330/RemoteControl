import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "./Header";

const Settingo = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.topletter}>
            <Text style={styles.toptext}>Settings</Text>
          </View>
          <TouchableOpacity
            style={styles.touchview}
            onPress={() => props.setrouteflagfunc("Climao")}
          >
            <View style={styles.setbtns}>
              <Text style={styles.setbtntxt}>Clima settings</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                left: 20,
                top: 10,
                width: 0,
                height: 0,
                borderTopColor: "transparent",
                borderBottomColor: "transparent",
                borderRightColor: "#fff",
                borderStyle: "solid",
                borderTopWidth: 30,
                borderRightWidth: 40,
                borderBottomWidth: 30,
              }}
              onPress={() => props.setrouteflagfunc("Setting")}
            >
              <View
                style={{
                  position: "absolute",
                  left: 1,
                  top: -28,
                  width: 0,
                  height: 0,
                  borderTopColor: "transparent",
                  borderBottomColor: "transparent",
                  borderRightColor: "#404080",
                  borderStyle: "solid",
                  borderTopWidth: 28,
                  borderRightWidth: 38,
                  borderBottomWidth: 28,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchview}
              onPress={() => props.setrouteflagfunc("Party")}
            >
              <View style={styles.setbtns}>
                <Text style={styles.setbtntxt}>Party settings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 20,
                top: 10,
                width: 0,
                height: 0,
                borderTopColor: "transparent",
                borderBottomColor: "transparent",
                borderLeftColor: "#fff",
                borderStyle: "solid",
                borderTopWidth: 30,
                borderLeftWidth: 40,
                borderBottomWidth: 30,
              }}
              onPress={() => props.setrouteflagfunc("Setting")}
            >
              <View
                style={{
                  position: "absolute",
                  right: 1,
                  top: -28,
                  width: 0,
                  height: 0,
                  borderTopColor: "transparent",
                  borderBottomColor: "transparent",
                  borderLeftColor: "#404080",
                  borderStyle: "solid",
                  borderTopWidth: 28,
                  borderLeftWidth: 38,
                  borderBottomWidth: 28,
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.touchview}
            onPress={() => props.setrouteflagfunc("Password")}
          >
            <View style={styles.setbtns}>
              <Text style={styles.setbtntxt}>Password settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchview} disabled>
            <View style={styles.disablesetbtns}>
              <Text style={styles.setbtntxt}>Set Rfm channel</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.lasttouchview}
            onPress={() => props.setrouteflagfunc("Home")}
          >
            <View style={styles.lastsetbtns}>
              <Text>
                <Icon name="home" size={62} color="#fff" />
              </Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    backgroundColor: "#000",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  subsection: {
    backgroundColor: "#000",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  whitetext: {
    color: "#fff",
    fontSize: 14,
  },
  touchview: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  lasttouchview: {
    position: "absolute",
    bottom: 0,
    right: 0,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  setbtns: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#404080",
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
  },
  disablesetbtns: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#080828",
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
  },
  lastsetbtns: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#404080",
    padding: 5,
  },
  setbtntxt: {
    color: "#fff",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 3,
    textAlign: "center",
  },
  topletter: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  toptext: {
    fontSize: 24,
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 5,
    fontWeight: "bold",
  },
});

export default Settingo;
