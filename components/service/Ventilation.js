import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../Header";

const Ventilation = (props) => {
  const [cafstatus, setCafstatus] = useState(false);
  const [fscstatus, setFscstatus] = useState(false);
  const [capstatus, setCapstatus] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.main}>
            <View style={styles.topletter}>
              <Text style={styles.toptext}>Ventilation Control</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.itemsection}>
                <TouchableOpacity
                  style={
                    cafstatus ? styles.actitemsectionblk : styles.itemsectionblk
                  }
                  onPress={() => {
                    setCafstatus(!cafstatus);
                  }}
                >
                  <Text style={styles.itemtext}>CAF</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    fscstatus ? styles.actitemsectionblk : styles.itemsectionblk
                  }
                  onPress={() => {
                    setFscstatus(!fscstatus);
                  }}
                >
                  <Text style={styles.itemtext}>Fsc</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    capstatus ? styles.actitemsectionblk : styles.itemsectionblk
                  }
                  onPress={() => {
                    setCapstatus(!capstatus);
                  }}
                >
                  <Text style={styles.itemtext}>CAP</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.secitemsection}>
                <TouchableOpacity style={styles.sectouchsection}>
                  <Text style={styles.secitemtext}>
                    Cap Calibration procedure
                  </Text>
                </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginRight: 20,
    marginLeft: 20,
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
  itemsection: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  actitemsectionblk: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
    width: "31%",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#50bc50",
  },
  itemsectionblk: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
    width: "31%",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#404080",
  },
  itemtext: {
    color: "#fff",
    fontSize: 22,
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 4,
    textAlign: "center",
  },
  secitemsection: {
    width: "100%",
    marginTop: 20,
  },
  sectouchsection: {
    width: "100%",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
  },
  secitemtext: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 3,
    textAlign: "center",
    fontSize: 22,
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

export default Ventilation;
