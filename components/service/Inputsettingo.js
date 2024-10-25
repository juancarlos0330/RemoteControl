import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Header from "../Header";

const Inputsettingo = (props) => {
  const [imageflag, setImageflag] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Input settings</Text>
              <Text style={styles.toptext}>2/2</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.firstsection}>
                <TouchableOpacity style={styles.firstitem}>
                  <Text style={styles.firsttext}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.firstitem}>
                  <Text style={styles.firsttext}>2</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.secondsection}>
                <View>
                  <Text style={styles.secondtitletext}>Fire Alarm</Text>
                  <TouchableOpacity
                    style={
                      imageflag
                        ? styles.acttouchimageview
                        : styles.touchimageview
                    }
                    onPress={() => setImageflag(!imageflag)}
                  >
                    <Image
                      source={require("../../assets/image/firealarm.png")}
                      style={{
                        width: 160,
                        height: 80,
                      }}
                    />
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
              <TouchableOpacity
                style={styles.bottomviewleft}
                onPress={() => props.setrouteflagfunc("Inputsetting")}
              >
                <Text style={styles.bottomtext}>{"<<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomviewright} disabled>
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
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
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
    width: "10%",
    justifyContent: "space-between",
  },
  firstitem: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#404080",
    paddingTop: 25,
    paddingBottom: 25,
  },
  firsttext: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  secondsection: {
    width: "83%",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 95,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  secondtitletext: {
    color: "#fff",
    letterSpacing: 1,
    textAlign: "center",
    textTransform: "uppercase",
  },
  touchimageview: {
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 3,
    borderStyle: "solid",
  },
  acttouchimageview: {
    borderRadius: 5,
    borderColor: "#00fc00",
    borderWidth: 3,
    borderStyle: "solid",
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
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    width: 80,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 10,
    marginLeft: 15,
  },
  bottomviewright: {
    backgroundColor: "#080828",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    width: 80,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 10,
    marginLeft: 15,
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

export default Inputsettingo;
