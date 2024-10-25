import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";

const Bpdsettingo = (props) => {
  const [manuon, setManuon] = useState(false);
  const [manuoff, setManuoff] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>BPD settings</Text>
              <Text style={styles.toptext}>2/2</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.secondsection}>
                <TouchableOpacity
                  style={
                    manuon
                      ? styles.actsecondsectionitem
                      : styles.secondsectionitem
                  }
                  onPress={() => setManuon(!manuon)}
                >
                  <Text style={styles.secondsectiontext}>Clockwise</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    manuoff
                      ? styles.actsecondsectionitem
                      : styles.secondsectionitem
                  }
                  onPress={() => setManuoff(!manuoff)}
                >
                  <Text style={styles.secondsectiontext}>counterclockwise</Text>
                </TouchableOpacity>
                <View style={styles.secondtitleblk}>
                  <Text style={styles.secondtitletext}>Rotation</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <View style={styles.bottomline}></View>

            <View style={styles.bottomsection}>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Servicetwo")}
              >
                <Text style={styles.bottomtext}>ok</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Servicetwo")}
              >
                <Text style={styles.bottomtext}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewright}
                onPress={() => props.setrouteflagfunc("Bpdsetting")}
              >
                <Text style={styles.bottomtext}>{"<<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewright}
                onPress={() => props.setrouteflagfunc("Bpdsetting")}
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
  secondsection: {
    flexDirection: "row",
    borderColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 10,
    marginBottom: 150,
    justifyContent: "space-evenly",
    paddingRight: 10,
    paddingLeft: 10,
    position: "relative",
  },
  secondsectionitem: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    width: "45%",
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
  },
  actsecondsectionitem: {
    backgroundColor: "#50bc50",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    width: "45%",
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
  },
  secondsectiontext: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  secondtitleblk: {
    position: "absolute",
    top: -12,
    left: 10,
    backgroundColor: "#000",
  },
  secondtitletext: {
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 2,
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
  bottomviewright: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    width: 80,
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

export default Bpdsettingo;
