import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";

const Disconnectaccfour = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Disconnect Acc.</Text>
              <Text style={styles.toptext}>4/4</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.itemsection}>
                <TouchableOpacity
                  style={styles.itemsectionblk}
                  onPress={() => props.setrouteflagfunc("Etesvous")}
                >
                  <Text style={styles.itemsectiontext}>Deconnecter tout</Text>
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
                <Text style={styles.bottomtext}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewleft}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewright}
                onPress={() => props.setrouteflagfunc("Disconnectaccthree")}
              >
                <Text style={styles.bottomtext}>{"<<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewright}
                onPress={() => props.setrouteflagfunc("Disconnectacc")}
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
  itemsection: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  itemsectionblk: {
    width: "65%",
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  itemsectiontext: {
    color: "#fff",
    fontSize: 22,
    letterSpacing: 3,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
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

export default Disconnectaccfour;
