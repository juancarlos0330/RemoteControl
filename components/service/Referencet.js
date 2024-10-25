import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";

const Referencet = (props) => {
  const [manuon, setManuon] = useState(false);
  const [manuoff, setManuoff] = useState(true);
  const [num, setNum] = useState(0.5);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Reference t. settings</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.secondsection}>
                <TouchableOpacity
                  style={
                    manuon
                      ? styles.actsecondsectionitem
                      : styles.secondsectionitem
                  }
                  onPress={() => setManuon(!manuon)}
                >
                  <Text style={styles.secondsectiontext}>Return</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    manuoff
                      ? styles.actsecondsectionitem
                      : styles.secondsectionitem
                  }
                  onPress={() => setManuoff(!manuoff)}
                >
                  <Text style={styles.secondsectiontext}>supply</Text>
                </TouchableOpacity>
                <View style={styles.secondtitleblk}>
                  <Text style={styles.secondtitletext}>Reference probe</Text>
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
                      num === 0.5 ? setNum(0.5) : setNum(num - 0.5)
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
                  <Text style={styles.secondtitletext}>Delta temperature</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <View style={styles.bottomline}></View>

            <View style={styles.bottomsection}>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Servicefive")}
              >
                <Text style={styles.bottomtext}>ok</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Servicefive")}
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
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 60,
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
    marginLeft: 10,
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

export default Referencet;
