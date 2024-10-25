import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";

const Bpdsetting = (props) => {
  const [autoon, setAutoon] = useState(true);
  const [autostand, setAutostand] = useState(false);
  const [manuon, setManuon] = useState(false);
  const [manuoff, setManuoff] = useState(false);
  const [num, setNum] = useState(12.0);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>BPD settings</Text>
              <Text style={styles.toptext}>1/2</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.firstsection}>
                <TouchableOpacity
                  style={
                    autoon
                      ? styles.actfirstsectionitem
                      : styles.firstsectionitem
                  }
                  onPress={() => setAutoon(!autoon)}
                >
                  <Text style={styles.firstsectiontext}>
                    Automatic &nbsp;(on)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    autostand
                      ? styles.actfirstsectionitem
                      : styles.firstsectionitem
                  }
                  onPress={() => setAutostand(!autostand)}
                >
                  <Text style={styles.firstsectiontext}>
                    Automatic &nbsp;(on + Standby)
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.secondsection}>
                <TouchableOpacity
                  style={
                    manuon
                      ? styles.actsecondsectionitem
                      : styles.secondsectionitem
                  }
                  onPress={() => setManuon(!manuon)}
                >
                  <Text style={styles.secondsectiontext}>Open</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    manuoff
                      ? styles.actsecondsectionitem
                      : styles.secondsectionitem
                  }
                  onPress={() => setManuoff(!manuoff)}
                >
                  <Text style={styles.secondsectiontext}>Closed</Text>
                </TouchableOpacity>
                <View style={styles.secondtitleblk}>
                  <Text style={styles.secondtitletext}>Manual</Text>
                </View>
              </View>
              <View style={styles.thirdsection}>
                <View style={styles.thirdsectionitem}>
                  <Text style={styles.thirdsectiontext}>
                    {num.toFixed(1)} &nbsp;'
                  </Text>
                </View>
                <View style={styles.thirdsectionitem}>
                  <TouchableOpacity
                    style={styles.thiredsectionblk}
                    onPress={() =>
                      num === 12 ? setNum(12.0) : setNum(num - 0.5)
                    }
                  >
                    <Text>
                      <Icon name="caret-down" size={40} color="white" />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.thiredsectionblk}
                    onPress={() => setNum(num + 0.5)}
                  >
                    <Text>
                      <Icon name="caret-up" size={40} color="white" />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.secondtitleblk}>
                  <Text style={styles.secondtitletext}>Ext. Temp. Min.</Text>
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
              <TouchableOpacity
                style={styles.bottomviewright}
                onPress={() => props.setrouteflagfunc("Bpdsettingo")}
              >
                <Text style={styles.bottomtext}>{"<<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomviewright}
                onPress={() => props.setrouteflagfunc("Bpdsettingo")}
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
    marginRight: 10,
    marginLeft: 10,
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
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  firstsectionitem: {
    width: "48%",
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 6,
    padding: 2,
    justifyContent: "center",
  },
  actfirstsectionitem: {
    width: "48%",
    backgroundColor: "#50bc50",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 6,
    padding: 2,
    justifyContent: "center",
  },
  firstsectiontext: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  secondsection: {
    flexDirection: "row",
    borderColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-evenly",
    paddingRight: 10,
    paddingLeft: 10,
    position: "relative",
  },
  secondsectionitem: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    width: "45%",
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  actsecondsectionitem: {
    backgroundColor: "#50bc50",
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    width: "45%",
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  secondsectiontext: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  secondtitleblk: {
    position: "absolute",
    top: -12,
    left: 10,
    backgroundColor: "#000",
  },
  secondtitletext: {
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  thirdsection: {
    flexDirection: "row",
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    position: "relative",
  },
  thirdsectionitem: {
    marginTop: 15,
    marginBottom: 10,
    width: "45%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thirdsectiontext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 5,
  },
  thiredsectionblk: {
    backgroundColor: "#404080",
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 20,
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
    justifyContent: "space-evenly",
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
  },
  bottomviewright: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    width: 80,
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

export default Bpdsetting;
