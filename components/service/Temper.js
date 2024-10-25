import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";

const Temper = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>hyster. Temp.set.</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.firstsection}>
                <Text style={styles.firstsectiontext}>Hot</Text>
                <Text style={styles.firstsectiontext}>Cold</Text>
              </View>
              <View style={styles.secondsection}>
                <View style={styles.firstsectionitem}>
                  <View
                    style={{
                      justifyContent: "space-between",
                      width: "50%",
                      paddingLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        letterSpacing: 2,
                      }}
                    >
                      12.0 '
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        letterSpacing: 2,
                      }}
                    >
                      0.0 '
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        letterSpacing: 2,
                      }}
                    >
                      -12.0 '
                    </Text>
                  </View>
                  <View style={{ justifyContent: "space-between" }}>
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.actbarsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                    <View style={styles.barsstyle} />
                  </View>
                </View>
                <View style={styles.secondsectionitem}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: 5,
                      marginBottom: 5,
                    }}
                  >
                    <View
                      style={{
                        borderColor: "#fff",
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderRadius: 5,
                        width: "50%",
                        paddingTop: 20,
                        paddingBottom: 20,
                        paddingLeft: 15,
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 20,
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          letterSpacing: 3,
                        }}
                      >
                        On
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          textTransform: "uppercase",
                          letterSpacing: 3,
                        }}
                      >
                        0.5 '
                      </Text>
                    </View>
                    <View style={{ justifyContent: "space-between" }}>
                      <TouchableOpacity
                        style={{
                          borderColor: "#fff",
                          borderWidth: 1,
                          borderStyle: "solid",
                          paddingRight: 10,
                          paddingLeft: 10,
                          borderRadius: 5,
                          backgroundColor: "#404080",
                        }}
                      >
                        <Icon name="caret-up" size={40} color="white" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          borderColor: "#fff",
                          borderWidth: 1,
                          borderStyle: "solid",
                          paddingRight: 10,
                          paddingLeft: 10,
                          borderRadius: 5,
                          backgroundColor: "#404080",
                        }}
                      >
                        <Icon name="caret-down" size={40} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: 5,
                      marginBottom: 5,
                    }}
                  >
                    <View
                      style={{
                        borderColor: "#fff",
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderRadius: 5,
                        width: "50%",
                        paddingTop: 20,
                        paddingBottom: 20,
                        paddingLeft: 15,
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 20,
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          letterSpacing: 3,
                        }}
                      >
                        Off
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          textTransform: "uppercase",
                          letterSpacing: 3,
                        }}
                      >
                        0.0 '
                      </Text>
                    </View>
                    <View style={{ justifyContent: "space-between" }}>
                      <TouchableOpacity
                        style={{
                          borderColor: "#fff",
                          borderWidth: 1,
                          borderStyle: "solid",
                          paddingRight: 10,
                          paddingLeft: 10,
                          borderRadius: 5,
                          backgroundColor: "#404080",
                        }}
                      >
                        <Icon name="caret-up" size={40} color="white" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          borderColor: "#fff",
                          borderWidth: 1,
                          borderStyle: "solid",
                          paddingRight: 10,
                          paddingLeft: 10,
                          borderRadius: 5,
                          backgroundColor: "#404080",
                        }}
                      >
                        <Icon name="caret-down" size={40} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View>
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
  mainblock: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  firstsection: {
    width: "20%",
  },
  firstsectiontext: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 4,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    marginBottom: 15,
    textAlign: "center",
  },
  secondsection: {
    width: "75%",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 5,
  },
  firstsectionitem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "45%",
  },
  barsstyle: {
    width: 50,
    height: 5,
    backgroundColor: "gray",
    marginTop: 1,
    marginBottom: 1,
  },
  actbarsstyle: {
    width: 50,
    height: 5,
    backgroundColor: "#3094e8",
    marginTop: 1,
    marginBottom: 1,
  },
  secondsectionitem: {
    width: "47%",
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
  bottomtext: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 4,
    textTransform: "uppercase",
  },
});

export default Temper;
