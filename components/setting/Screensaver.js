import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";
import Bottomsection from "./Bottomsection";

const Screensaver = (props) => {
  const [turnflag, setTurnflag] = useState(true);
  const [mins, setMins] = useState(15);

  const setrouteflagfunc = (flag) => {
    props.setrouteflagfunc(flag);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <Text style={styles.title}>Screensaver Settings</Text>
            <View style={styles.mainblock}>
              <View style={styles.firstsection}>
                <TouchableOpacity
                  style={turnflag ? styles.turnstyle : styles.turnoffstyle}
                  onPress={() => setTurnflag(!turnflag)}
                >
                  <Text
                    style={
                      turnflag ? styles.turntextstyle : styles.turnofftextstyle
                    }
                  >
                    {turnflag ? "on" : "off"}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.secondsection}>
                <View style={styles.minsetblock}>
                  <Text style={styles.mintext}>{mins} min</Text>
                </View>
                <View style={styles.controlblock}>
                  <TouchableOpacity
                    style={styles.controlitem}
                    onPress={() => setMins(mins + 1)}
                  >
                    <Text>
                      <Icon name="caret-up" size={40} color="white" />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.controlitem}
                    onPress={() => setMins(mins - 1)}
                  >
                    <Text>
                      <Icon name="caret-down" size={40} color="white" />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <Bottomsection setrouteflagfunc={setrouteflagfunc} />
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
  main: {
    width: "100%",
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    color: "#fff",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  mainblock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
    marginBottom: 15,
    marginRight: 20,
    marginLeft: 20,
  },
  firstsection: {
    flex: 3,
  },
  secondsection: {
    flex: 8,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  turnstyle: {
    backgroundColor: "#00c800",
    width: "90%",
    height: 70,
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  turnoffstyle: {
    backgroundColor: "#a00000",
    width: "90%",
    height: 70,
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  turntextstyle: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 4,
  },
  turnofftextstyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 4,
  },
  minsetblock: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  controlblock: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  mintext: {
    fontSize: 24,
    color: "#fff",
    letterSpacing: 8,
    fontWeight: "bold",
  },
  controlitem: {
    backgroundColor: "#404080",
    marginTop: 20,
    marginBottom: 20,
    paddingRight: 25,
    paddingLeft: 25,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default Screensaver;
