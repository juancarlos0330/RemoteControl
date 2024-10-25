import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Header from "../Header";

const Languages = (props) => {
  const [langflag, setLangflag] = useState("1");

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.topletter}>
            <Text style={styles.toptext}>Select Language</Text>
            <Text style={styles.toptext}>1/2</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.imgblock}>
              <TouchableOpacity
                style={langflag === "1" ? styles.actimgitem : styles.imgitem}
                onPress={() => setLangflag("1")}
              >
                <Image
                  source={require("../../assets/image/lang/1.png")}
                  style={{ width: 60, height: 48 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={langflag === "2" ? styles.actimgitem : styles.imgitem}
                onPress={() => setLangflag("2")}
              >
                <Image
                  source={require("../../assets/image/lang/2.png")}
                  style={{ width: 60, height: 48 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={langflag === "3" ? styles.actimgitem : styles.imgitem}
                onPress={() => setLangflag("3")}
              >
                <Image
                  source={require("../../assets/image/lang/3.png")}
                  style={{ width: 60, height: 48 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imgblock}>
              <TouchableOpacity
                style={langflag === "4" ? styles.actimgitem : styles.imgitem}
                onPress={() => setLangflag("4")}
              >
                <Image
                  source={require("../../assets/image/lang/4.png")}
                  style={{ width: 60, height: 48 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={langflag === "5" ? styles.actimgitem : styles.imgitem}
                onPress={() => setLangflag("5")}
              >
                <Image
                  source={require("../../assets/image/lang/5.png")}
                  style={{ width: 60, height: 48 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={langflag === "6" ? styles.actimgitem : styles.imgitem}
                onPress={() => setLangflag("6")}
              >
                <Image
                  source={require("../../assets/image/lang/6.png")}
                  style={{ width: 60, height: 48 }}
                />
              </TouchableOpacity>
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
            <TouchableOpacity style={styles.bottomviewleft} disabled>
              <Text style={styles.bottomtext}>{"<<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomviewright}
              onPress={() => props.setrouteflagfunc("Languageo")}
            >
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

export default Languages;
