import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";

const Reportdatathree = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Acc. clima</Text>
              <Text style={styles.toptext}>3/6</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.mainsection}>
                <View style={styles.firstsection}>
                  <Text style={styles.firsttext}>
                    Pheater &nbsp;&nbsp;&nbsp;&nbsp;:off &nbsp;/&nbsp; not
                    connected
                  </Text>
                  <Text style={styles.firsttext}>
                    Command &nbsp;&nbsp;:off
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Link Level &nbsp;:&nbsp;
                    0/10
                  </Text>
                  <Text style={styles.firsttext}>&nbsp;</Text>
                </View>
                <View style={styles.secondsection}>
                  <View>
                    <Text style={styles.firsttext}>
                      Int. &nbsp;&nbsp;&nbsp;Pheater
                    </Text>
                    <Text style={styles.firsttext}>&nbsp;</Text>
                    <Text style={styles.firsttext}>&nbsp;</Text>
                  </View>
                  <TouchableOpacity style={styles.secondtoch}>
                    <Text style={styles.secondtext}>Test</Text>
                  </TouchableOpacity>
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
                onPress={() => props.setrouteflagfunc("Reportdatatwo")}
              >
                <Text style={styles.bottomtext}>{"<<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewright}
                onPress={() => props.setrouteflagfunc("Reportdatafour")}
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
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  firstsection: {
    borderColor: "#e0b800",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  secondsection: {
    borderColor: "#e0b800",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondtoch: {
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    backgroundColor: "#50bc50",
    justifyContent: "center",
    paddingRight: 30,
    paddingLeft: 30,
  },
  secondtext: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 1,
  },
  firsttext: {
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

export default Reportdatathree;
