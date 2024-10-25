import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Menu = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.subsection}>
          <TouchableOpacity
            style={styles.touchview}
            onPress={() => props.setrouteflagfunc("Setting")}
          >
            <View style={styles.setbtns}>
              <Text style={styles.setbtntxt}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchview}
            onPress={() => props.setrouteflagfunc("Service")}
          >
            <View style={styles.setbtns}>
              <Text style={styles.setbtntxt}>Service</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchview}
            onPress={() => props.setrouteflagfunc("Infofirst")}
          >
            <View style={styles.setbtns}>
              <Text style={styles.setbtntxt}>Info</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lasttouchview}
            onPress={() => props.setrouteflagfunc("Home")}
          >
            <View style={styles.lastsetbtns}>
              <Text>
                <Icon name="home" size={62} color="#fff" />
              </Text>
            </View>
          </TouchableOpacity>
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
    paddingTop: 20,
  },
  whitetext: {
    color: "#fff",
    fontSize: 14,
  },
  touchview: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  lasttouchview: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 10,
  },
  setbtns: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#404080",
    paddingTop: 15,
    paddingBottom: 15,
    width: "60%",
  },
  lastsetbtns: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#404080",
    padding: 5,
  },
  setbtntxt: {
    color: "#fff",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 3,
    textAlign: "center",
  },
});

export default Menu;
