import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";

const Infothird = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.topletter}>
            <Text style={styles.toptext}>Accessory</Text>
            <Text style={styles.toptext}>3/3</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.mainblock}>
              <Text style={styles.maintext}>Ext1</Text>
              <Text style={styles.maintext}>ext4</Text>
              <Text style={styles.maintext}>dsc</Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
            </View>
            <View style={styles.mainblock}>
              <Text style={styles.maintext}>Ext2</Text>
              <Text style={styles.maintext}>flw1</Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
            </View>
            <View style={styles.mainblock}>
              <Text style={styles.maintext}>ext3</Text>
              <Text style={styles.maintext}>flw2</Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
              <Text style={styles.maintext}></Text>
            </View>
          </View>
          <View style={styles.bottomline}></View>
          <View style={styles.bottomsection}>
            <TouchableOpacity
              style={styles.bottomviewright}
              onPress={() => props.setrouteflagfunc("Infosecond")}
            >
              <Text style={styles.bottomtext}>{"<<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomviewright}
              onPress={() => props.setrouteflagfunc("Infofirst")}
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 15,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 35,
  },
  mainblock: {
    width: "30%",
  },
  maintext: {
    color: "#fff",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 2,
    padding: 1,
  },
  bottomline: {
    width: "100%",
    height: 2,
    backgroundColor: "#0000f8",
  },
  bottomsection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 10,
  },
  bottomviewright: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    width: 65,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 5,
    marginLeft: 5,
  },
  bottomtext: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 4,
    textTransform: "uppercase",
  },
  lastsetbtns: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#404080",
    padding: 5,
    marginRight: 5,
    marginLeft: 10,
  },
});

export default Infothird;
