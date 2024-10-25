import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";
import Bottomsectiono from "./Bottomsectiono";

const Climao = (props) => {
  const [turnstatus, setTurnstatus] = useState(false);
  const [turnsunstatus, setTurnsunstatus] = useState(false);
  const [turnicestatus, setTurnicestatus] = useState(false);
  const [sunprogress, setSunprogress] = useState(17);

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
              <Text style={styles.toptext}>Clima settings</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.mainsectiono}>
                <TouchableOpacity
                  style={turnstatus ? styles.turnview : styles.turnoffview}
                  onPress={() => setTurnstatus(!turnstatus)}
                >
                  <Text style={styles.turntext}>
                    pre heater {turnstatus ? "on" : "off"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={turnsunstatus ? styles.oniconview : styles.iconview}
                  onPress={() => setTurnsunstatus(!turnsunstatus)}
                >
                  <Image
                    source={require("../../assets/image/sun.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={turnicestatus ? styles.oniconview : styles.iconview}
                  onPress={() => setTurnicestatus(!turnicestatus)}
                >
                  <Image
                    source={require("../../assets/image/ice.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.mainsection}>
                <View style={styles.submainsection}>
                  <View style={styles.imagerelative}>
                    <Image
                      source={require("../../assets/image/progress.png")}
                      style={styles.imageview}
                    />
                    <View style={styles.imagesubrelative}>
                      <View
                        style={{
                          backgroundColor: "#00fc00",
                          height: (sunprogress * 100) / 32 + "%",
                          width: "100%",
                        }}
                      />
                    </View>
                  </View>
                  <Text style={styles.imagetext}>{sunprogress} 'c</Text>
                </View>
                <View style={styles.submainsection}>
                  <TouchableOpacity
                    style={styles.submainsecbtn}
                    onPress={() =>
                      sunprogress < 32
                        ? setSunprogress(sunprogress + 1)
                        : setSunprogress(32)
                    }
                  >
                    <Icon name="caret-up" size={30} color="#fff" />
                  </TouchableOpacity>
                  <View style={styles.submainsecicon}>
                    <Icon name="sun-o" size={30} color="#e8d428" />
                  </View>
                  <TouchableOpacity
                    style={styles.submainsecbtn}
                    onPress={() =>
                      sunprogress > 0
                        ? setSunprogress(sunprogress - 1)
                        : setSunprogress(0)
                    }
                  >
                    <Icon name="caret-down" size={30} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ width: "31%" }}></View>
            </View>
          </View>
          <Bottomsectiono setrouteflagfunc={setrouteflagfunc} />
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
  mainsection: {
    width: "31%",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  mainsectiono: {
    width: "31%",
    justifyContent: "space-between",
  },
  turnoffview: {
    color: "#fff",
    backgroundColor: "#a00000",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  turnview: {
    color: "#fff",
    backgroundColor: "#00c800",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  turntext: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  iconview: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 2,
  },
  oniconview: {
    backgroundColor: "#d0eca8",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 2,
  },
  submainsection: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  submainsecbtn: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  submainsecicon: { paddingTop: 5, paddingBottom: 5 },
  imagerelative: {
    position: "relative",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageview: { width: "80%", height: 120, zIndex: 100 },
  imagesubrelative: {
    position: "absolute",
    bottom: 0,
    left: "10%",
    backgroundColor: "#606060",
    width: "80%",
    height: 120,
    zIndex: 10,
    justifyContent: "flex-end",
  },
  imagetext: { color: "#fff", letterSpacing: 5 },
});

export default Climao;
