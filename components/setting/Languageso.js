import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";

const Languageso = (props) => {
  const [langflag, setLangflag] = useState("1");

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.topletter}>
            <Text style={styles.toptext}>Select Language</Text>
            <Text style={styles.toptext}>2/2</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.imgblock}>
              <TouchableOpacity
                style={langflag === "7" ? styles.actimgitem : styles.imgitem}
                onPress={() => setLangflag("7")}
              >
                <Image
                  source={require("../../assets/image/lang/7.png")}
                  style={{ width: 60, height: 48 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={langflag === "8" ? styles.actimgitem : styles.imgitem}
                onPress={() => setLangflag("8")}
              >
                <Image
                  source={require("../../assets/image/lang/8.png")}
                  style={{ width: 60, height: 48 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imgblock}>
              <View style={{ width: "100%", height: 62 }}></View>
            </View>
          </View>
          <View style={styles.bottomline}></View>
          <View style={styles.bottomsection}>
            <TouchableOpacity
              style={styles.bottomview}
              onPress={() => props.setrouteflagfunc("Home")}
            >
              <Text style={styles.bottomtext}>ok</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomview}
              onPress={() => props.setrouteflagfunc("Setting")}
            >
              <Text style={styles.bottomtext}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomviewright}
              onPress={() => props.setrouteflagfunc("Language")}
            >
              <Text style={styles.bottomtext}>{"<<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomviewleft} disabled>
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
  main: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 15,
  },
  lastsetbtns: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#404080",
    padding: 5,
  },
  imgblock: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    marginBottom: 20,
  },
  imgitem: {
    padding: 6,
    borderColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
  },
  actimgitem: {
    padding: 6,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
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
    backgroundColor: "#080828",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    width: 55,
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
});

export default Languageso;
