import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";

const Probes = (props) => {
  const [twostatus, setTwostatus] = useState(true);
  const [threestatus, setThreestatus] = useState(false);
  const [fourstatus, setFourstatus] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Probes settings</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.mainsection}>
                <View style={styles.sections}>
                  <Text style={styles.sectionstext}>Nr. T. Analog.</Text>
                </View>
                <View style={styles.sections}>
                  <TouchableOpacity
                    style={
                      twostatus ? styles.actsectionstouch : styles.sectionstouch
                    }
                    onPress={() => setTwostatus(!twostatus)}
                  >
                    <Text style={styles.sectionstouchtext}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      threestatus
                        ? styles.actsectionstouch
                        : styles.sectionstouch
                    }
                    onPress={() => setThreestatus(!threestatus)}
                  >
                    <Text style={styles.sectionstouchtext}>3</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      fourstatus
                        ? styles.actsectionstouch
                        : styles.sectionstouch
                    }
                    onPress={() => setFourstatus(!fourstatus)}
                  >
                    <Text style={styles.sectionstouchtext}>4</Text>
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
                onPress={() => props.setrouteflagfunc("Servicefour")}
              >
                <Text style={styles.bottomtext}>ok</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomview}
                onPress={() => props.setrouteflagfunc("Servicefour")}
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
  },
  topletter: {
    flexDirection: "row",
    justifyContent: "center",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 150,
  },
  sections: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },
  sectionstext: {
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  sectionstouch: {
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#404080",
  },
  actsectionstouch: {
    borderColor: "#fff",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#50bc50",
  },
  sectionstouchtext: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "bold",
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

export default Probes;
