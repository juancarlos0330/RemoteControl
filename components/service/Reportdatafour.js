import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";

const Reportdatafour = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Bypass</Text>
              <Text style={styles.toptext}>4/6</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.mainsection}>
                <View style={styles.firstsection}>
                  <Text style={styles.sectiontext}>Config</Text>
                  <Text style={styles.sectiontext}>Status</Text>
                  <Text style={styles.sectiontext}>Tfresh</Text>
                  <Text style={styles.sectiontext}>Treturn</Text>
                  <Text style={styles.sectiontext}>Tsupply</Text>
                  <Text style={styles.sectiontext}>Texhaust</Text>
                  <Text style={styles.sectiontext}>Min Temp. Ext.</Text>
                </View>
                <View>
                  <Text style={styles.sectiontext}>: &nbsp;Automatic (on)</Text>
                  <Text style={styles.sectiontext}>: &nbsp;open</Text>
                  <Text style={styles.sectiontext}>: &nbsp;0.0</Text>
                  <Text style={styles.sectiontext}>: &nbsp;0.0</Text>
                  <Text style={styles.sectiontext}>: &nbsp;0.0</Text>
                  <Text style={styles.sectiontext}>: &nbsp;0.0</Text>
                  <Text style={styles.sectiontext}>: &nbsp;0.0</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <View style={styles.bottomline}></View>
            <View style={styles.bottomsection}>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Servicefour")}
              >
                <Text style={styles.bottomtext}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomviewo}></TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewright}
                onPress={() => props.setrouteflagfunc("Reportdatathree")}
              >
                <Text style={styles.bottomtext}>{"<<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewright}
                onPress={() => props.setrouteflagfunc("Reportdatafive")}
              >
                <Text style={styles.bottomtext}>{">>"}</Text>
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
    marginRight: 10,
    marginLeft: 10,
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
  mainsection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 30,
    marginBottom: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  firstsection: {
    width: "40%",
  },
  sectiontext: {
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 1,
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
  bottomviewo: {
    width: 90,
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
  bottomviewright: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    width: 80,
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

export default Reportdatafour;
