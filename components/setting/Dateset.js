import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Header";
import Bottomsection from "./Bottomsection";

const Dateset = (props) => {
  const [days, setDays] = useState(new Date().getDate());
  const [months, setMonths] = useState(new Date().getMonth() + 1);
  const [years, setYears] = useState(new Date().getFullYear());

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
              <Text style={styles.toptext}>Date settings</Text>
            </View>
            <View style={styles.mainblock}>
              <View style={styles.mainitemview}>
                <Text style={styles.sectiontitle}>{days}</Text>
                <TouchableOpacity
                  style={styles.sectionitem}
                  onPress={() => setDays(days + 1)}
                >
                  <Text>
                    <Icon name="caret-up" size={30} color="#fff" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sectionitem}
                  onPress={() => setDays(days - 1)}
                >
                  <Text>
                    <Icon name="caret-down" size={30} color="#fff" />
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mainitemviewslash}>
                <Text style={styles.sectiontitle}>/</Text>
              </View>
              <View style={styles.mainitemview}>
                <Text style={styles.sectiontitle}>{months}</Text>
                <TouchableOpacity
                  style={styles.sectionitem}
                  onPress={() => setMonths(months + 1)}
                >
                  <Text>
                    <Icon name="caret-up" size={30} color="#fff" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sectionitem}
                  onPress={() => setMonths(months - 1)}
                >
                  <Text>
                    <Icon name="caret-down" size={30} color="#fff" />
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mainitemviewslash}>
                <Text style={styles.sectiontitle}>/</Text>
              </View>
              <View style={styles.mainitemview}>
                <Text style={styles.sectiontitle}>{years}</Text>
                <TouchableOpacity
                  style={styles.sectionitem}
                  onPress={() => setYears(years + 1)}
                >
                  <Text>
                    <Icon name="caret-up" size={30} color="#fff" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sectionitem}
                  onPress={() => setYears(years - 1)}
                >
                  <Text>
                    <Icon name="caret-down" size={30} color="#fff" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Bottomsection setrouteflagfunc={setrouteflagfunc} />
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
  title: {
    color: "#fff",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  mainblock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 15,
    marginBottom: 15,
    marginRight: 20,
    marginLeft: 20,
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
  sectiontitle: {
    fontSize: 28,
    color: "#fff",
    letterSpacing: 5,
    fontWeight: "bold",
  },
  mainitemview: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionitem: {
    backgroundColor: "#404080",
    marginTop: 12,
    marginBottom: 12,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 6,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
  },
  mainitemviewslash: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
  },
});

export default Dateset;
