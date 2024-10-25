import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../Header";
import Rule from "./Rule";

const Mondays = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Monday</Text>
            </View>
            <View style={styles.mainblock}>
              <Rule text="0" />
              <Rule text="" />
              <Rule text="2" />
              <Rule text="" />
              <Rule text="4" />
              <Rule text="" />
              <Rule text="6" />
              <Rule text="" />
              <Rule text="8" />
              <Rule text="" />
              <Rule text="10" />
              <Rule text="" />
              <Rule text="12" />
              <Rule text="" />
              <Rule text="14" />
              <Rule text="" />
              <Rule text="16" />
              <Rule text="" />
              <Rule text="18" />
              <Rule text="" />
              <Rule text="20" />
              <Rule text="" />
              <Rule text="22" />
              <Rule text="" />
              <Rule text="24" />
              <View style={styles.topbarstyle} />
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <View style={styles.bottomline}></View>

            <View style={styles.bottomsection}>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Weekly")}
              >
                <Text style={styles.bottomtext}>ok</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 55 }}></TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewleft}
                onPress={() => props.setrouteflagfunc("Sundays")}
              >
                <Text style={styles.bottomtext}>{"<<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewleft}
                onPress={() => props.setrouteflagfunc("Tuesdays")}
              >
                <Text style={styles.bottomtext}>{">>"}</Text>
              </TouchableOpacity>
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
    flexDirection: "row",
    position: "relative",
    marginTop: 170,
    marginBottom: 5,
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
    width: 90,
    paddingTop: 8,
    paddingBottom: 8,
  },
  bottomviewleft: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    width: 65,
    paddingTop: 8,
    paddingBottom: 8,
  },
  bottomviewright: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    width: 55,
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
  topbarstyle: {
    position: "absolute",
    top: -1,
    left: "4%",
    width: "92%",
    height: 1,
    backgroundColor: "#fff",
  },
});

export default Mondays;
