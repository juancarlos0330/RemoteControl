import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../Header";

const Changepassword = (props) => {
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.topletter}>
            <Text style={styles.toptext}>change service pwd</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.firstsection}>
              <View style={styles.firstsecfirst}>
                <Text style={styles.firstsectitle}>old password</Text>
                <TextInput
                  keyboardType="visible-password"
                  textContentType="password"
                  style={styles.firstsecpass}
                  defaultValue={password}
                  secureTextEntry={true}
                  editable={false}
                  selectTextOnFocus={false}
                  autoComplete="password"
                />
              </View>
              <View style={styles.firstsecsecond}>
                <TouchableOpacity
                  style={styles.firstsecbackview}
                  onPress={() => props.setrouteflagfunc("Servicefour")}
                >
                  <Text style={styles.backtext}>back</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.secondsection}>
              <View style={styles.secondsecblock}>
                <TouchableOpacity
                  style={styles.secondsecitem}
                  onPress={() => setPassword(password + "1")}
                >
                  <Text style={styles.whitetext}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondsecitem}
                  onPress={() => setPassword(password + "2")}
                >
                  <Text style={styles.whitetext}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondsecitem}
                  onPress={() => setPassword(password + "3")}
                >
                  <Text style={styles.whitetext}>3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.secondsecblock}>
                <TouchableOpacity
                  style={styles.secondsecitem}
                  onPress={() => setPassword(password + "4")}
                >
                  <Text style={styles.whitetext}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondsecitem}
                  onPress={() => setPassword(password + "5")}
                >
                  <Text style={styles.whitetext}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondsecitem}
                  onPress={() => setPassword(password + "6")}
                >
                  <Text style={styles.whitetext}>6</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.secondsecblock}>
                <TouchableOpacity
                  style={styles.secondsecitem}
                  onPress={() => setPassword(password + "7")}
                >
                  <Text style={styles.whitetext}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondsecitem}
                  onPress={() => setPassword(password + "8")}
                >
                  <Text style={styles.whitetext}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondsecitem}
                  onPress={() => setPassword(password + "9")}
                >
                  <Text style={styles.whitetext}>9</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.secondsecblock}>
                <TouchableOpacity
                  style={styles.secondsecitem}
                  onPress={() =>
                    setPassword(password.substring(0, password.length - 1))
                  }
                >
                  <Text style={styles.whitetext}>{"<-"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondsecitem}
                  onPress={() => setPassword(password + "0")}
                >
                  <Text style={styles.whitetext}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    password.length >= 5
                      ? styles.secondsecitem
                      : styles.secondsecitemok
                  }
                  disabled={password.length >= 5 ? false : true}
                  onPress={() => alert("Click me!")}
                >
                  <Text style={styles.whitetext}>OK</Text>
                </TouchableOpacity>
              </View>
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
    marginTop: 15,
  },
  firstsection: {
    width: "45%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondsection: {
    width: "55%",
    justifyContent: "center",
    alignItems: "center",
  },
  firstsectitle: {
    marginTop: 5,
    color: "white",
    fontSize: 15,
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  firstsecpass: {
    color: "#000",
    backgroundColor: "#fff",
    width: "60%",
    height: 30,
    marginTop: 30,
    textAlign: "center",
    fontSize: 24,
    letterSpacing: 8,
  },
  whitetext: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  secondsecblock: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
  secondsecitemok: {
    backgroundColor: "#080828",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  secondsecitem: {
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  firstsecfirst: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  firstsecsecond: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  firstsecbackview: {
    width: "52%",
    backgroundColor: "#404080",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 9,
    paddingBottom: 9,
  },
  backtext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
    textTransform: "uppercase",
    letterSpacing: 4,
    fontWeight: "bold",
  },
});

export default Changepassword;
