import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";

const Unbalance = (props) => {
  const [turnstatus, setTurnstatus] = useState(false);
  const [balance, setBalance] = useState(0);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>SET unbalance</Text>
            </View>
            <View style={styles.mainblock}>
              <TouchableOpacity
                style={
                  turnstatus ? styles.firstsection : styles.actfirstsection
                }
                onPress={() => setTurnstatus(!turnstatus)}
              >
                <Text
                  style={
                    turnstatus
                      ? styles.firstsectiontext
                      : styles.actfirstsectiontext
                  }
                >
                  {turnstatus ? "on" : "off"}
                </Text>
              </TouchableOpacity>
              <View style={styles.secondsection}>
                <View style={styles.firstitem}>
                  <Text style={styles.itemfirsttext}>supply</Text>
                  <Text
                    style={
                      balance > 0
                        ? styles.plusitemsecondtext
                        : balance === 0
                        ? styles.itemsecondtext
                        : styles.minusitemsecondtext
                    }
                  >
                    {balance} %
                  </Text>
                  <Text style={styles.itemthirdtext}>Extract</Text>
                </View>
                <View style={styles.seconditem}>
                  <View style={styles.seconditemblk}>
                    <Image
                      source={require("../../assets/image/progresstwo.png")}
                      style={{ width: 30, height: 80 }}
                    />
                  </View>
                  <View style={styles.seconditemblk}>
                    <Image
                      source={require("../../assets/image/progressone.png")}
                      style={{ width: 30, height: 80 }}
                    />
                  </View>
                </View>
                <View style={styles.thirditem}>
                  <TouchableOpacity
                    style={styles.thirdblk}
                    onPress={() => setBalance(balance + 5)}
                  >
                    <Text>
                      <Icon name="caret-up" size={40} color="white" />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.thirdblk}
                    onPress={() => setBalance(balance - 5)}
                  >
                    <Text>
                      <Icon name="caret-down" size={40} color="white" />
                    </Text>
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
                onPress={() => props.setrouteflagfunc("Servicetwo")}
              >
                <Text style={styles.bottomtext}>ok</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Servicetwo")}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  topletter: {
    flexDirection: "row",
    justifyContent: "flex-start",
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
    width: "28%",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#00c800",
  },
  firstsectiontext: {
    color: "#000",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 4,
  },
  actfirstsection: {
    width: "28%",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#a00000",
  },
  actfirstsectiontext: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 4,
  },
  secondsection: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    width: "68%",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
  },
  firstitem: {
    width: "55%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemfirsttext: {
    textTransform: "uppercase",
    color: "#fff",
    backgroundColor: "#3094e8",
    width: "100%",
    letterSpacing: 2,
    textAlign: "center",
    paddingTop: 3,
    paddingBottom: 3,
  },
  itemsecondtext: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 5,
  },
  plusitemsecondtext: {
    color: "#3094e8",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 5,
  },
  minusitemsecondtext: {
    color: "#f89420",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 5,
  },
  itemthirdtext: {
    textTransform: "uppercase",
    color: "#fff",
    backgroundColor: "#f89420",
    width: "100%",
    letterSpacing: 2,
    textAlign: "center",
    paddingTop: 3,
    paddingBottom: 3,
  },
  seconditem: {
    width: "18%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  seconditemblk: {
    backgroundColor: "#606060",
  },
  thirditem: {
    width: "18%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  thirdblk: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    backgroundColor: "#404080",
    paddingRight: 10,
    paddingLeft: 10,
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

export default Unbalance;
