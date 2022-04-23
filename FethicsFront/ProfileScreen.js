 
 import React from "react";
 import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView } from "react-native";
 import { Ionicons } from "@expo/vector-icons";
  const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={[styles.text, {fontSize: 60, marginTop: 60}]}>Fethics</Text>
          <Ionicons name="ios-person-circle-outline" size={250} color="#006600" style={{ marginTop: 20 }}/>
          <View style={[styles.roundBorder, {borderRadius: 0,}]}>
            <Text style={styles.text}>User ID: qxusfjie15830</Text>
          </View>
          <View style={[styles.roundBorder, {flexDirection: "row", backgroundColor: "white", marginTop: 0, marginBottom: 0,}]}>
            <View style={styles.bigLeftButton}>
              <TouchableOpacity>
                <Text style={[styles.text, {fontSize: 30}]}>HELP!!</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bigRightButton}>
              <TouchableOpacity>
                <Text style={[styles.text, {fontSize: 30}]}>Meet Up?</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={[styles.roundBorder, {marginTop: 0}]}>
            <Text style={styles.text}>Accepted Requests</Text>
            <View style={[styles.whiteBorder]}>
              <View style={{flexDirection: "row"}}>
                <View style={{width: "80%"}}>
                  <Text style={styles.class}>CSRE 102</Text>
                  <Text style={styles.assignment}>Alt Assignment with Longer Text</Text>
                </View>
                <Text style={styles.price}>$5.99</Text>
              </View>
              <View>
                <Text style={styles.description}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </View>
              <View style={{flexDirection: "row"}}>
                <TouchableOpacity style={styles.button}>
                  <Text>Open File</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>Upload File</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>Submit File</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.roundBorder, {marginBottom: 20}]}>
            <Text style={styles.text}>Requested Help</Text>
            <View style={[styles.whiteBorder]}>
              <View style={{flexDirection: "row"}}>
                <View style={{width: "80%"}}>
                  <Text style={styles.class}>CSRE 203</Text>
                  <Text style={styles.assignment}>Alt Assignment with Longer Text</Text>
                </View>
                <Text style={styles.price}>$12.99</Text>
              </View>
              <View>
                <Text style={styles.description}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </View>
            </View>
            <View style={[styles.whiteBorder]}>
              <View style={{flexDirection: "row"}}>
                <View style={{width: "80%"}}>
                  <Text style={styles.class}>CSRE 270</Text>
                  <Text style={styles.assignment}>Second Assignment with Shorter Text</Text>
                </View>
                <Text style={styles.price}>$5.99</Text>
              </View>
              <View>
                <Text style={styles.description}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      
      
    </View>
  );
 };
  export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
  },
  roundBorder: {
    marginTop: 16,
    width: "60%",
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: "#C4C4C4",
    color: "#20232a",
    textAlign: "center",
    fontWeight: "bold",
  },
  whiteBorder: {
    margin: "auto",
    marginVertical: 10,
    width: "80%",
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "white",
    color: "#20232a",
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    color: "#006600", 
    fontSize: 35,
  },
  description: {
    fontSize: 10, 
    textAlign: "left", 
    paddingLeft: 10,
  },
  class: {
    fontSize: 30,
    paddingLeft: 10,
    textAlign: "left",
    textDecorationLine: "underline",
  },
  assignment: {
    fontSize: 25,
    paddingLeft: 10,
    textAlign: "left",
  },
  price: {
    fontSize: 20,
    textAlign: "right",
    margin: "auto",
    color: "#565656",
  },
  button: {
    margin: "auto",
    width: "30%",
    marginTop: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    paddingVertical: 10,
  },
  bigLeftButton: {
    margin: "auto",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingVertical: 16,
    borderRadius: 10,
    width: "48%",
    backgroundColor: "#C4C4C4",
    color: "#20232a",
    textAlign: "center",
    fontWeight: "bold",
  },
  bigRightButton: {
    margin: "auto",
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    paddingVertical: 16,
    borderRadius: 10,
    width: "48%",
    backgroundColor: "#C4C4C4",
    color: "#20232a",
    textAlign: "center",
    fontWeight: "bold",
  },
});