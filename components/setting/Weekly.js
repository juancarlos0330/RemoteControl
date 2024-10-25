import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";
import Bottomsection from "./Bottomsection";

const Weekly = (props) => {
  const [turnweek, setTurnweek] = useState(false);

  const setrouteflagfunc = (flag) => {
    props.setrouteflagfunc(flag);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Weekly settings</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.firstsection}>
                <TouchableOpacity
                  style={
                    turnweek ? styles.firstturnstyle : styles.firstturnoffstyle
                  }
                  onPress={() => setTurnweek(!turnweek)}
                >
                  <Text
                    style={
                      turnweek ? styles.firstturntext : styles.firstturnofftext
                    }
                  >
                    {turnweek ? "on" : "off"}
                  </Text>
                </TouchableOpacity>
                <View style={styles.firstprogram}>
                  <TouchableOpacity
                    style={styles.firstprogramblock}
                    onPress={() => props.setrouteflagfunc("Program")}
                  >
                    <Text style={styles.firstprogramtext}>Program</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondprogramblock}
                    onPress={() => props.setrouteflagfunc("Sundays")}
                  >
                    <Text style={styles.firstprogramtext}>View</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.secondsection}>
                <TouchableOpacity
                  style={styles.secondview}
                  onPress={() => props.setrouteflagfunc("Clima")}
                >
                  <Text style={styles.secondviewtext}>clima settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondview}
                  onPress={() => props.setrouteflagfunc("Speed")}
                >
                  <Text style={styles.secondviewtext}>Speed</Text>
                </TouchableOpacity>
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
  mainblock: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
    marginRight: 20,
    marginLeft: 20,
  },
  topletter: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: 10,
    paddingLeft: 10,
  },
  toptext: {
    fontSize: 24,
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 5,
    fontWeight: "bold",
  },
  firstsection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  secondsection: {
    width: "100%",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
  },
  firstturnoffstyle: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
    backgroundColor: "#a00000",
    paddingTop: 35,
    paddingBottom: 35,
    width: "22%",
  },
  firstturnstyle: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
    backgroundColor: "#00c800",
    paddingTop: 35,
    paddingBottom: 35,
    width: "22%",
  },
  firstturnofftext: {
    fontSize: 24,
    letterSpacing: 4,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
  firstturntext: {
    fontSize: 24,
    letterSpacing: 4,
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
  firstprogram: { width: "75%" },
  firstprogramblock: {
    width: "100%",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#404080",
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 7,
  },
  secondprogramblock: {
    width: "100%",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#404080",
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 7,
  },
  firstprogramtext: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 4,
    fontSize: 24,
    fontWeight: "bold",
  },
  secondview: {
    backgroundColor: "#404080",
    width: "46%",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  secondviewtext: {
    fontSize: 14,
    letterSpacing: 2,
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default Weekly;
