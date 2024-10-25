import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";
import Weekbottomsection from "./Weekbottomsection";

const Speed = (props) => {
  const [progress, setProgress] = useState(40);

  const setrouteflagfunc = (flag) => {
    props.setrouteflagfunc(flag);
  };

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
              <View>
                <Text style={styles.maintitle}>select speed min</Text>
              </View>
              <View style={styles.mainsection}>
                <View style={styles.firstmainblk}>
                  <Image
                    source={require("../../assets/image/sitprogress.png")}
                    style={styles.imageview}
                  />
                  <View style={styles.imagebackview}>
                    <View
                      style={{
                        backgroundColor: "#00fc00",
                        height: 60,
                        width: progress + "%",
                      }}
                    />
                  </View>
                  <Text style={styles.progresstext}>{progress} m3/h</Text>
                </View>
                <View style={styles.secondmainblk}>
                  <TouchableOpacity
                    style={styles.secondmainup}
                    onPress={() =>
                      progress < 100
                        ? setProgress(progress + 1)
                        : setProgress(100)
                    }
                  >
                    <Icon name="caret-up" size={30} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondmaindown}
                    onPress={() =>
                      progress > 0 ? setProgress(progress - 1) : setProgress(0)
                    }
                  >
                    <Icon name="caret-down" size={30} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <Weekbottomsection setrouteflagfunc={setrouteflagfunc} />
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
  maintitle: {
    color: "#fff",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  mainsection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  secondmainblk: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  firstmainblk: { width: "55%", position: "relative" },
  secondmainup: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    marginBottom: 25,
  },
  secondmaindown: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 25,
  },
  imageview: { width: "100%", height: 60, zIndex: 100 },
  imagebackview: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#606060",
    width: "100%",
    height: 60,
    zIndex: 10,
    justifyContent: "flex-end",
  },
  progresstext: {
    position: "absolute",
    bottom: -40,
    left: 20,
    color: "#fff",
    letterSpacing: 5,
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default Speed;
