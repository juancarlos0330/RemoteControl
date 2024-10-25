import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";

const Servicefive = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.topletter}>
            <Text style={styles.toptext}>Service ( + )</Text>
            <Text style={styles.toptext}>5/5</Text>
          </View>
          <TouchableOpacity style={styles.touchview} disabled>
            <View style={styles.setbtnsdis}>
              <Text style={styles.setbtntxt}>Modbus settings</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.setpropsbtn}>
            <TouchableOpacity
              style={styles.setpropsbtntouch}
              onPress={() => props.setrouteflagfunc("Servicefour")}
            >
              <View style={styles.setpropsleftbtn} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchview}
              onPress={() => props.setrouteflagfunc("Testunit")}
            >
              <View style={styles.setbtns}>
                <Text style={styles.setbtntxt}>Test unit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.setpropsrightbtn}
              onPress={() => props.setrouteflagfunc("Serviceone")}
            >
              <View style={styles.setpropsmiddlebtn} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.touchview}
            onPress={() => props.setrouteflagfunc("Eeprom")}
          >
            <View style={styles.setbtns}>
              <Text style={styles.setbtntxt}>Eeprom reset</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchview}
            onPress={() => props.setrouteflagfunc("Referencet")}
          >
            <View style={styles.setbtns}>
              <Text style={styles.setbtntxt}>Reference T. Settings</Text>
            </View>
          </TouchableOpacity>
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
  setbtnsdis: {
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
    justifyContent: "space-between",
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
  setpropsbtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  setpropsbtntouch: {
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
  },
  setpropsleftbtn: {
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
  },
  setpropsrightbtn: {
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
  },
  setpropsmiddlebtn: {
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
  },
});

export default Servicefive;
