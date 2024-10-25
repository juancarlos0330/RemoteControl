import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./components/Home";
import Setting from "./components/Setting";
import Settingo from "./components/Settingo";
import Menu from "./components/Menu";
import Service from "./components/Service";
import Languages from "./components/setting/Languages";
import Languageso from "./components/setting/Languageso";
import Infofirst from "./components/info/Infofirst";
import Infosecond from "./components/info/Infosecond";
import Infothird from "./components/info/Infothird";
import Screensaver from "./components/setting/Screensaver";
import Dateset from "./components/setting/Dateset";
import Weekly from "./components/setting/Weekly";
import Party from "./components/setting/Party";
import Password from "./components/setting/Password";
import Oldpassword from "./components/setting/Oldpassword";
import Speed from "./components/setting/Speed";
import Clima from "./components/setting/Clima";
import Climao from "./components/setting/Climao";
import Program from "./components/setting/Program";
import Sundays from "./components/setting/views/Sundays";
import Mondays from "./components/setting/views/Mondays";
import Tuesdays from "./components/setting/views/Tuesdays";
import Wednesdays from "./components/setting/views/Wednesdays";
import Thursdays from "./components/setting/views/Thursdays";
import Fridays from "./components/setting/views/Fridays";
import Saturdays from "./components/setting/views/Saturdays";
import Serviceone from "./components/service/Serviceone";
import Servicetwo from "./components/service/Servicetwo";
import Servicethree from "./components/service/Servicethree";
import Servicefour from "./components/service/Servicefour";
import Servicefive from "./components/service/Servicefive";
import Disconnectacc from "./components/service/Disconnectacc";
import Disconnectacctwo from "./components/service/Disconnectacctwo";
import Disconnectaccthree from "./components/service/Disconnectaccthree";
import Disconnectaccfour from "./components/service/Disconnectaccfour";
import Removeaccessory from "./components/service/Removeaccessory";
import Etesvous from "./components/service/Etesvous";
import Ventilation from "./components/service/Ventilation";
import Airflow from "./components/service/Airflow";
import Outputsetting from "./components/service/Outputsetting";
import Outputsettingo from "./components/service/Outputsettingo";
import Bpdsetting from "./components/service/Bpdsetting";
import Bpdsettingo from "./components/service/Bpdsettingo";
import Unbalance from "./components/service/Unbalance";
import Rhsetting from "./components/service/Rhsetting";
import Cosetting from "./components/service/Cosetting";
import Vocsetting from "./components/service/Vocsetting";
import Upgrade from "./components/service/Upgrade";
import Changepassword from "./components/service/Changepassword";
import Probes from "./components/service/Probes";
import Testunit from "./components/service/Testunit";
import Eeprom from "./components/service/Eeprom";
import Referencet from "./components/service/Referencet";
import Reportdata from "./components/service/Reportdata";
import Reportdatatwo from "./components/service/Reportdatatwo";
import Reportdatathree from "./components/service/Reportdatathree";
import Reportdatafour from "./components/service/Reportdatafour";
import Reportdatafive from "./components/service/Reportdatafive";
import Reportdatasix from "./components/service/Reportdatasix";
import Inputsetting from "./components/service/Inputsetting";
import Inputsettingo from "./components/service/Inputsettingo";
import Temper from "./components/service/Temper";
import Filter from "./components/service/Filter";

export default function App() {
  const [routeflag, setRouteflag] = useState("Home");

  const setrouteflagfunc = (flag) => {
    setRouteflag(flag);
  };

  return (
    <View style={{ flex: 1 }}>
      {routeflag === "Home" ? (
        <Home setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Setting" ? (
        <Setting setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Settingo" ? (
        <Settingo setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Menu" ? (
        <Menu setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Service" ? (
        <Service setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Language" ? (
        <Languages setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Languageo" ? (
        <Languageso setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Infofirst" ? (
        <Infofirst setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Infosecond" ? (
        <Infosecond setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Infothird" ? (
        <Infothird setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Screensaver" ? (
        <Screensaver setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Dateset" ? (
        <Dateset setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Weekly" ? (
        <Weekly setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Party" ? (
        <Party setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Password" ? (
        <Password setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Oldpassword" ? (
        <Oldpassword setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Speed" ? (
        <Speed setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Clima" ? (
        <Clima setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Climao" ? (
        <Climao setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Program" ? (
        <Program setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Sundays" ? (
        <Sundays setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Mondays" ? (
        <Mondays setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Tuesdays" ? (
        <Tuesdays setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Wednesdays" ? (
        <Wednesdays setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Thursdays" ? (
        <Thursdays setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Fridays" ? (
        <Fridays setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Saturdays" ? (
        <Saturdays setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Serviceone" ? (
        <Serviceone setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Servicetwo" ? (
        <Servicetwo setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Servicethree" ? (
        <Servicethree setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Servicefour" ? (
        <Servicefour setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Servicefive" ? (
        <Servicefive setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Disconnectacc" ? (
        <Disconnectacc setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Disconnectacctwo" ? (
        <Disconnectacctwo setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Disconnectaccthree" ? (
        <Disconnectaccthree setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Disconnectaccfour" ? (
        <Disconnectaccfour setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Removeaccessory" ? (
        <Removeaccessory setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Etesvous" ? (
        <Etesvous setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Ventilation" ? (
        <Ventilation setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Airflow" ? (
        <Airflow setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Outputsetting" ? (
        <Outputsetting setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Outputsettingo" ? (
        <Outputsettingo setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Bpdsetting" ? (
        <Bpdsetting setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Bpdsettingo" ? (
        <Bpdsettingo setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Unbalance" ? (
        <Unbalance setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Rhsetting" ? (
        <Rhsetting setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Cosetting" ? (
        <Cosetting setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Vocsetting" ? (
        <Vocsetting setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Upgrade" ? (
        <Upgrade setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Changepassword" ? (
        <Changepassword setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Probes" ? (
        <Probes setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Testunit" ? (
        <Testunit setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Eeprom" ? (
        <Eeprom setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Referencet" ? (
        <Referencet setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Reportdata" ? (
        <Reportdata setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Reportdatatwo" ? (
        <Reportdatatwo setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Reportdatathree" ? (
        <Reportdatathree setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Reportdatafour" ? (
        <Reportdatafour setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Reportdatafive" ? (
        <Reportdatafive setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Reportdatasix" ? (
        <Reportdatasix setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Inputsetting" ? (
        <Inputsetting setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Inputsettingo" ? (
        <Inputsettingo setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Temper" ? (
        <Temper setrouteflagfunc={setrouteflagfunc} />
      ) : null}
      {routeflag === "Filter" ? (
        <Filter setrouteflagfunc={setrouteflagfunc} />
      ) : null}

      <View style={styles.container}>
        <View style={styles.section}>
          <TouchableOpacity
            style={
              routeflag === "Home"
                ? styles.actbottommenubtn
                : styles.bottommenubtn
            }
            onPress={() => setRouteflag("Home")}
          >
            <Text>
              <Icon name="home" color="#fff" size={30} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              routeflag === "Service"
                ? styles.actbottommenubtn
                : routeflag === "Serviceone"
                ? styles.actbottommenubtn
                : routeflag === "Servicetwo"
                ? styles.actbottommenubtn
                : routeflag === "Servicethree"
                ? styles.actbottommenubtn
                : routeflag === "Servicefour"
                ? styles.actbottommenubtn
                : routeflag === "Servicefive"
                ? styles.actbottommenubtn
                : routeflag === "Disconnectacc"
                ? styles.actbottommenubtn
                : routeflag === "Disconnectacctwo"
                ? styles.actbottommenubtn
                : routeflag === "Disconnectaccthree"
                ? styles.actbottommenubtn
                : routeflag === "Disconnectaccfour"
                ? styles.actbottommenubtn
                : routeflag === "Removeaccessory"
                ? styles.actbottommenubtn
                : routeflag === "Etesvous"
                ? styles.actbottommenubtn
                : routeflag === "Ventilation"
                ? styles.actbottommenubtn
                : routeflag === "Airflow"
                ? styles.actbottommenubtn
                : routeflag === "Outputsetting"
                ? styles.actbottommenubtn
                : routeflag === "Outputsettingo"
                ? styles.actbottommenubtn
                : routeflag === "Bpdsetting"
                ? styles.actbottommenubtn
                : routeflag === "Bpdsettingo"
                ? styles.actbottommenubtn
                : routeflag === "Rhsetting"
                ? styles.actbottommenubtn
                : routeflag === "Cosetting"
                ? styles.actbottommenubtn
                : routeflag === "Vocsetting"
                ? styles.actbottommenubtn
                : routeflag === "Upgrade"
                ? styles.actbottommenubtn
                : routeflag === "Changepassword"
                ? styles.actbottommenubtn
                : routeflag === "Probes"
                ? styles.actbottommenubtn
                : routeflag === "Testunit"
                ? styles.actbottommenubtn
                : routeflag === "Eeprom"
                ? styles.actbottommenubtn
                : routeflag === "Referencet"
                ? styles.actbottommenubtn
                : routeflag === "Reportdata"
                ? styles.actbottommenubtn
                : routeflag === "Reportdatatwo"
                ? styles.actbottommenubtn
                : routeflag === "Reportdatathree"
                ? styles.actbottommenubtn
                : routeflag === "Reportdatafour"
                ? styles.actbottommenubtn
                : routeflag === "Reportdatafive"
                ? styles.actbottommenubtn
                : routeflag === "Reportdatasix"
                ? styles.actbottommenubtn
                : routeflag === "Inputsetting"
                ? styles.actbottommenubtn
                : routeflag === "Inputsettingo"
                ? styles.actbottommenubtn
                : routeflag === "Temper"
                ? styles.actbottommenubtn
                : routeflag === "Filter"
                ? styles.actbottommenubtn
                : styles.bottommenubtn
            }
            onPress={() => setRouteflag("Service")}
          >
            <Text>
              <Icon name="gear" color="#fff" size={30} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              routeflag === "Infofirst"
                ? styles.actbottommenubtn
                : routeflag === "Infosecond"
                ? styles.actbottommenubtn
                : routeflag === "Infothird"
                ? styles.actbottommenubtn
                : styles.bottommenubtn
            }
            onPress={() => setRouteflag("Infofirst")}
          >
            <Text>
              <Icon name="info" color="#fff" size={30} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              routeflag === "Setting"
                ? styles.actbottommenubtn
                : routeflag === "Settingo"
                ? styles.actbottommenubtn
                : routeflag === "Language"
                ? styles.actbottommenubtn
                : routeflag === "Languageo"
                ? styles.actbottommenubtn
                : routeflag === "Screensaver"
                ? styles.actbottommenubtn
                : routeflag === "Dateset"
                ? styles.actbottommenubtn
                : routeflag === "Weekly"
                ? styles.actbottommenubtn
                : routeflag === "Party"
                ? styles.actbottommenubtn
                : routeflag === "Password"
                ? styles.actbottommenubtn
                : routeflag === "Oldpassword"
                ? styles.actbottommenubtn
                : routeflag === "Speed"
                ? styles.actbottommenubtn
                : routeflag === "Clima"
                ? styles.actbottommenubtn
                : routeflag === "Climao"
                ? styles.actbottommenubtn
                : routeflag === "Program"
                ? styles.actbottommenubtn
                : routeflag === "Sundays"
                ? styles.actbottommenubtn
                : routeflag === "Mondays"
                ? styles.actbottommenubtn
                : routeflag === "Wednesdays"
                ? styles.actbottommenubtn
                : routeflag === "Tuesdays"
                ? styles.actbottommenubtn
                : routeflag === "Thursdays"
                ? styles.actbottommenubtn
                : routeflag === "Fridays"
                ? styles.actbottommenubtn
                : routeflag === "Saturdays"
                ? styles.actbottommenubtn
                : routeflag === "Unbalance"
                ? styles.actbottommenubtn
                : styles.bottommenubtn
            }
            onPress={() => setRouteflag("Setting")}
          >
            <Text>
              <Icon name="bars" color="#fff" size={30} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomsection}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
    paddingTop: 10,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#171d24",
    width: "90%",
    padding: 8,
    borderRadius: 22,
  },
  bottomsection: {
    backgroundColor: "#434343",
    width: "35%",
    height: 5,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 5,
  },
  bottommenubtn: {
    backgroundColor: "transparent",
    padding: 8,
    borderRadius: 10,
  },
  actbottommenubtn: {
    backgroundColor: "#040f16",
    padding: 8,
    borderRadius: 10,
  },
});
