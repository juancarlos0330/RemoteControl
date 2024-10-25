import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";

const Outputsettingo = (props) => {
  const [numberonestatus, setNumberonestatus] = useState(true);
  const [numbertwostatus, setNumbertwostatus] = useState(false);
  const [xclosestatus, setXclosestatus] = useState(true);
  const [xopenstatus, setXopenstatus] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Output settings</Text>
              <Text style={styles.toptext}>2/2</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.firstsection}>
                <TouchableOpacity
                  style={
                    numberonestatus
                      ? styles.actfirstsectionitem
                      : styles.firstsectionitem
                  }
                  onPress={() => setNumberonestatus(!numberonestatus)}
                >
                  <Text style={styles.firstsectext}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    numbertwostatus
                      ? styles.actfirstsectionitem
                      : styles.firstsectionitem
                  }
                  onPress={() => setNumbertwostatus(!numbertwostatus)}
                >
                  <Text style={styles.firstsectext}>2</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.secondsection}>
                <TouchableOpacity
                  style={
                    xclosestatus ? styles.actseconditem : styles.seconditem
                  }
                  onPress={() => setXclosestatus(!xclosestatus)}
                >
                  <Text style={styles.seconditemtext}>
                    x1 &nbsp;(11-10) closed
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={xopenstatus ? styles.actseconditem : styles.seconditem}
                  onPress={() => setXopenstatus(!xopenstatus)}
                >
                  <Text style={styles.seconditemtext}>
                    x1 &nbsp;(11-10) open
                  </Text>
                </TouchableOpacity>
                <View style={styles.secondtitleblk}>
                  <Text style={styles.secondtitletext}>Select Action</Text>
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
                style={styles.bottomviewleft}
                onPress={() => props.setrouteflagfunc("Outputsetting")}
              >
                <Text style={styles.bottomtext}>{"<<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewleft}
                onPress={() => props.setrouteflagfunc("Outputsetting")}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: 20,
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
    width: "14%",
    borderColor: "#fff",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  secondsection: {
    width: "84%",
    borderColor: "#fff",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
  },
  actfirstsectionitem: {
    backgroundColor: "#50bc50",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    width: "65%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  firstsectionitem: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    width: "65%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  firstsectext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  seconditem: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 20,
    paddingLeft: 20,
    width: "45%",
  },
  actseconditem: {
    backgroundColor: "#50bc50",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 20,
    paddingLeft: 20,
    width: "45%",
  },
  seconditemtext: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 2,
  },
  secondtitleblk: {
    top: -12,
    left: 10,
    position: "absolute",
    backgroundColor: "#000",
  },
  secondtitletext: {
    color: "#fff",
    textTransform: "uppercase",
    zIndex: 1,
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

export default Outputsettingo;
