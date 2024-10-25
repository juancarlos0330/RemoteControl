import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";

const Airflow = (props) => {
  const [speedstatus, setSpeedstatus] = useState(false);
  const [steplessstatus, setSteplessstatus] = useState(true);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Select speed mode</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.itemsection}>
                <TouchableOpacity
                  style={speedstatus ? styles.actitemblk : styles.itemblk}
                  onPress={() => {
                    setSpeedstatus(!speedstatus);
                  }}
                >
                  <Text style={styles.itemtext}>Three speed</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemsection}>
                <TouchableOpacity
                  style={steplessstatus ? styles.actitemblk : styles.itemblk}
                  onPress={() => {
                    setSteplessstatus(!steplessstatus);
                  }}
                >
                  <Text style={styles.itemtext}>Stepless</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <View style={styles.bottomline}></View>

            <View style={styles.bottomsection}>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Serviceone")}
              >
                <Text style={styles.bottomtext}>ok</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Serviceone")}
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
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 25,
  },
  topletter: {
    flexDirection: "row",
    justifyContent: "center",
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
  itemsection: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  actitemblk: {
    width: "70%",
    backgroundColor: "#50bc50",
    borderColor: "#fff",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  itemblk: {
    width: "70%",
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  itemtext: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 3,
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
    marginLeft: 15,
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

export default Airflow;
