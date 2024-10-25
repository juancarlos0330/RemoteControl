import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Header from "../Header";

const Inputsetting = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Input settings</Text>
              <Text style={styles.toptext}>1/2</Text>
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
                <View style={styles.seconditem}>
                  <TouchableOpacity style={styles.seconditemdisable}>
                    <Text style={styles.seconditemdisabletext}>Disable</Text>
                  </TouchableOpacity>
                  <View style={styles.seconditemgraph}>
                    <TouchableOpacity style={styles.seconditembtn}>
                      <Text style={styles.seconditembtntext}>Reg air flow</Text>
                    </TouchableOpacity>
                    <View style={styles.secondimageitem}>
                      <View style={styles.imageview}>
                        <Image
                          source={require("../../assets/image/sitprogress.png")}
                          style={{
                            width: 180,
                            height: 50,
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          marginLeft: 25,
                          color: "#fff",
                          textAlign: "center",
                        }}
                      >
                        0 %
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.seconditem}>
                  <View style={styles.secondfirstitem}>
                    <Text style={styles.secondfirstitemtext}>Unit</Text>
                    <Text style={styles.secondfirstitemtext}>Bpd</Text>
                  </View>
                  <View style={styles.secondseconditem}>
                    <TouchableOpacity style={styles.secondtouchitem}>
                      <Text style={styles.secondtouchitemtext}>OV = Stop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondtouchitem}>
                      <Text style={styles.secondtouchitemtext}>OV = open</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondseconditem}>
                    <TouchableOpacity style={styles.secondtouchitem}>
                      <Text style={styles.secondtouchitemtext}>10V = Stop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondtouchitem}>
                      <Text style={styles.secondtouchitemtext}>10V = open</Text>
                    </TouchableOpacity>
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
              <TouchableOpacity style={styles.bottomviewright} disabled>
                <Text style={styles.bottomtext}>{"<<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewleft}
                onPress={() => props.setrouteflagfunc("Inputsettingo")}
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
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  seconditem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
  },
  seconditemdisable: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    width: "25%",
    justifyContent: "center",
    backgroundColor: "#404080",
    paddingTop: 25,
    paddingBottom: 25,
  },
  actseconditemdisable: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    width: "25%",
    justifyContent: "center",
    backgroundColor: "#50bc50",
    paddingTop: 25,
    paddingBottom: 25,
  },
  seconditemdisabletext: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 1,
  },
  seconditemgraph: {
    width: "70%",
  },
  seconditembtn: {
    width: "100%",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#404080",
    paddingTop: 3,
    paddingBottom: 3,
  },
  seconditembtntext: {
    color: "#fff",
    letterSpacing: 1,
    textAlign: "center",
    textTransform: "uppercase",
  },
  secondimageitem: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  imageview: {
    backgroundColor: "gray",
  },
  secondfirstitem: {
    width: "15%",
    justifyContent: "space-evenly",
  },
  secondfirstitemtext: {
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  secondseconditem: {
    width: "38%",
  },
  secondtouchitem: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  secondtouchitemtext: {
    color: "#fff",
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
  },
  secondthirditem: {
    width: "38%",
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

export default Inputsetting;
