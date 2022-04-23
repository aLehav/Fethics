// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, SafeAreaView, Button} from 'react-native';
// // import DropDownPicker from 'react-native-dropdown-picker';
// import MeetupPage from "./MeetupPage";
// import RequestPage from "./RequestPage";

// export default function App() {
//   // const [open, setOpen] = useState(false);
//   // const [value, setValue] = useState(null);
//   // const [items, setItems] = useState([
//   //   {label: 'Apple', value: 'apple'},
//   //   {label: 'Banana', value: 'banana'}
//   // ]);
 
//   return (
//     // <DropDownPicker>
//     //   open={open}
//     //   value={value}
//     //   items={items}
//     //   setOpen={setOpen}
//     //   setValue={setValue}
//     //   setItems={setItems}
//     //   </DropDownPicker>
//     <SafeAreaView>
//       <Text style={styles.textstyle}>Request A Tutor</Text> 
//       {/* <MeetupPage style={styles.container}/> */}
//       <RequestPage style={styles.container}/>
//       <StatusBar style="auto" />
//       <Button style="button"
//         title="Submit"
//         // onPress={() => Alert.alert('Simple Button pressed')}
//       />
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textstyle: {
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 100,
    fontSize: 30,
    fontWeight: "bold"
  },
  button:
  {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 50,
    borderColor: "#fff",
  }
});
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import ProfileScreen from "./ProfileScreen.js";
import TextScreen from "./TextScreen";
import VideoScreen from "./VideoScreen";
 
const TabNavigator = createMaterialTopTabNavigator(
  {
    //code for the pages
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-person-circle-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    TextS: {
      screen: TextScreen,
      navigationOptions: {
        tabBarLabel: "Text",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="text"
            size={tabInfo.focused ? 24 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Video: {
      screen: VideoScreen,
      navigationOptions: {
        tabBarLabel: "Videos",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-videocam-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    //code for the top
    tabBarOptions: {
      showIcon: true,
      style: {
        backgroundColor: "#006600",
      },
    },
    tabBarPosition: 'bottom',
  }
 );
  const Navigator = createAppContainer(TabNavigator);
  export default function App() {
  return (
    <Navigator>
      <ProfileScreen />
    </Navigator>
  );
 }
 
