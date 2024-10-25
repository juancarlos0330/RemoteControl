import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";

const Testunit = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Test unit</Text>
            </View>
            <View style={styles.mainblock}>
              <TouchableOpacity style={styles.firstsection}>
                <Text style={styles.firstsectiontext}>Start &nbsp; test</Text>
              </TouchableOpacity>
              <View style={styles.secondsection}>
                <Text style={styles.secondsectiontext}>Status</Text>
                <Text style={styles.secondsectiontext}>Not running</Text>
              </View>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <View style={styles.bottomline}></View>

            <View style={styles.bottomsection}>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Servicefive")}
              >
                <Text style={styles.bottomtext}>Back</Text>
              </TouchableOpacity>
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
    marginRight: 20,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 20,
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
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#a00000",
  },
  firstsectiontext: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 22,
    letterSpacing: 4,
    textAlign: "center",
  },
  secondsection: {
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    marginTop: 20,
  },
  secondsectiontext: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 4,
    textAlign: "center",
    margin: 20,
  },

  //

  bottomline: {
    width: "100%",
    height: 2,
    backgroundColor: "#0000f8",
  },
  bottomsection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
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
    marginRight: 10,
    marginLeft: 10,
  },
  bottomviewleft: {
    backgroundColor: "transparent",
    borderColor: "#fff",
    width: 105,
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

export default Testunit;
