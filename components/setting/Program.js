import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";
import Weekbottomsection from "./Weekbottomsection";

const Program = (props) => {
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);

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
              <Text style={styles.toptext}>Weekly programmer</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.mainsection}>
                <TouchableOpacity
                  style={monday ? styles.onmainitem : styles.mainitem}
                  onPress={() => setMonday(!monday)}
                >
                  <Text style={styles.mainitemtext}>Monday</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tuesday ? styles.onmainitem : styles.mainitem}
                  onPress={() => setTuesday(!tuesday)}
                >
                  <Text style={styles.mainitemtext}>Tuesday</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={wednesday ? styles.onmainitem : styles.mainitem}
                  onPress={() => setWednesday(!wednesday)}
                >
                  <Text style={styles.mainitemtext}>Wednesday</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mainsection}>
                <TouchableOpacity
                  style={thursday ? styles.onmainitem : styles.mainitem}
                  onPress={() => setThursday(!thursday)}
                >
                  <Text style={styles.mainitemtext}>Thursday</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={friday ? styles.onmainitem : styles.mainitem}
                  onPress={() => setFriday(!friday)}
                >
                  <Text style={styles.mainitemtext}>Friday</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={saturday ? styles.onmainitem : styles.mainitem}
                  onPress={() => setSaturday(!saturday)}
                >
                  <Text style={styles.mainitemtext}>Saturday</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mainsection}>
                <TouchableOpacity style={{ width: "29%" }}></TouchableOpacity>
                <TouchableOpacity style={{ width: "29%" }}></TouchableOpacity>
                <TouchableOpacity
                  style={sunday ? styles.onmainitem : styles.mainitem}
                  onPress={() => setSunday(!sunday)}
                >
                  <Text style={styles.mainitemtext}>Sunday</Text>
                </TouchableOpacity>
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 10,
  },
  mainitem: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    width: "29%",
    backgroundColor: "#404080",
    paddingTop: 12,
    paddingBottom: 12,
  },
  onmainitem: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    width: "29%",
    backgroundColor: "#50bc50",
    paddingTop: 12,
    paddingBottom: 12,
  },
  mainitemtext: {
    color: "#fff",
    letterSpacing: 3,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default Program;
