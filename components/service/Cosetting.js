import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";

const Cosetting = (props) => {
  const [sunprogress, setSunprogress] = useState(25);
  const [moonprogress, setMoonprogress] = useState(25);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Co2</Text>
              <Text style={styles.toptext}>Airflow</Text>
            </View>
            <View style={styles.mainblock}>
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
                  <Text style={styles.imagetext}>{sunprogress} ppm</Text>
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
                          height: (moonprogress * 100) / 32 + "%",
                          width: "100%",
                        }}
                      />
                    </View>
                  </View>
                  <Text style={styles.imagetext}>{moonprogress} %</Text>
                </View>
                <View style={styles.submainsection}>
                  <TouchableOpacity
                    style={styles.submainsecbtn}
                    onPress={() =>
                      moonprogress < 32
                        ? setMoonprogress(moonprogress + 1)
                        : setMoonprogress(32)
                    }
                  >
                    <Icon name="caret-up" size={30} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.submainsecbtn}
                    onPress={() =>
                      moonprogress > 0
                        ? setMoonprogress(moonprogress - 1)
                        : setMoonprogress(0)
                    }
                  >
                    <Icon name="caret-down" size={30} color="#fff" />
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
                onPress={() => props.setrouteflagfunc("Servicethree")}
              >
                <Text style={styles.bottomtext}>ok</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Servicethree")}
              >
                <Text style={styles.bottomtext}>Back</Text>
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
    justifyContent: "space-evenly",
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
    width: "48%",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingBottom: 20,
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
    justifyContent: "space-between",
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
    marginBottom: 10,
  },
  submainsecicon: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  imagerelative: {
    position: "relative",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageview: {
    width: "60%",
    height: 210,
    zIndex: 100,
  },
  imagesubrelative: {
    position: "absolute",
    bottom: 0,
    left: "20%",
    backgroundColor: "#606060",
    width: "60%",
    height: 210,
    zIndex: 10,
    justifyContent: "flex-end",
  },
  imagetext: {
    color: "#fff",
    letterSpacing: 5,
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

export default Cosetting;
