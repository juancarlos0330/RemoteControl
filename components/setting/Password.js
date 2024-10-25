import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";
import Bottomsectiono from "./Bottomsectiono";

const Password = (props) => {
  const [turnflag, setTurnflag] = useState(false);

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
              <Text style={styles.toptext}>Password</Text>
            </View>
            <View style={styles.mainblock}>
              <TouchableOpacity
                style={
                  turnflag ? styles.turnoffviewstyle : styles.turnviewstyle
                }
                onPress={() => setTurnflag(!turnflag)}
              >
                <Text style={turnflag ? styles.turnoffstyle : styles.turnstyle}>
                  {turnflag ? "on" : "off"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cpassview}
                onPress={() => props.setrouteflagfunc("Oldpassword")}
              >
                <Text style={styles.cpasstext}>Change Password</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Bottomsectiono setrouteflagfunc={setrouteflagfunc} />
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
    marginTop: 20,
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
  turnviewstyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a00000",
    marginRight: 15,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
  },
  turnoffviewstyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00c800",
    marginRight: 15,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
  },
  turnstyle: {
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    letterSpacing: 4,
    fontWeight: "bold",
  },
  turnoffstyle: {
    textTransform: "uppercase",
    color: "#000",
    fontSize: 24,
    textAlign: "center",
    letterSpacing: 4,
    fontWeight: "bold",
  },
  cpassview: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
  },
  cpasstext: {
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 4,
  },
});

export default Password;
