import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "./Header";

export default function Home(props) {
  const [progress, setProgress] = useState(74);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.section}>
        <View style={styles.subsection}>
          <View style={styles.subcontainer}>
            <View style={{ width: "52%", marginRight: "3%" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 45,
                }}
              >
                <View style={{ width: "45%" }}>
                  <Image
                    source={require("../assets/image/switch.png")}
                    style={{ width: 80, height: 80 }}
                  />
                </View>
                <View style={{ width: "55%" }}></View>
              </View>
              <View
                style={{
                  borderStyle: "solid",
                  borderColor: "#fff",
                  borderWidth: 1,
                  borderRadius: 4,
                  marginTop: 10,
                }}
              >
                <Text style={styles.noticetext}>FILTERS DISABLE</Text>
              </View>
            </View>
            <View
              style={{
                width: "45%",
                borderStyle: "solid",
                borderColor: "#fff",
                borderWidth: 1,
                borderRadius: 4,
                flexDirection: "column",
                height: "98%",
                marginTop: "2%",
              }}
            >
              <View
                style={{
                  flex: 82,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    width: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "85%",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <Image
                      source={require("../assets/image/progress.png")}
                      style={{ width: "60%", height: "100%", zIndex: 100 }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: "20%",
                        backgroundColor: "#606060",
                        width: "60%",
                        height: "100%",
                        zIndex: 10,
                        justifyContent: "flex-end",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "#00fc00",
                          width: "100%",
                          height: progress + "%",
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "50%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={styles.careicon}
                    onPress={() =>
                      progress < 100
                        ? setProgress(progress + 1)
                        : setProgress(100)
                    }
                  >
                    <Text>
                      <Icon name="caret-up" size={40} color="white" />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.careicon}
                    onPress={() =>
                      progress > 0 ? setProgress(progress - 1) : setProgress(0)
                    }
                  >
                    <Text>
                      <Icon name="caret-down" size={40} color="white" />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flex: 18,
                  alignItems: "center",
                }}
              >
                <Text style={styles.whitetext}>
                  {progress} &nbsp;m&nbsp;3&nbsp;/&nbsp;hs
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ backgroundColor: "#00009d", width: "100%", height: 2 }}
          ></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subcontainer: {
    backgroundColor: "#000",
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2%",
  },
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
  },
  bottomsection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1%",
    marginBottom: "1%",
    width: "95%",
  },
  menubtnsec: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#404080",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 35,
    paddingLeft: 35,
  },
  menubtn: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 5,
  },
  whitetext: {
    color: "#fff",
    fontSize: 14,
  },
  noticetext: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    letterSpacing: 5,
  },
  careicon: {
    backgroundColor: "#404080",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 4,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 3,
    paddingTop: 3,
    marginTop: 13,
    marginBottom: 13,
  },
});
