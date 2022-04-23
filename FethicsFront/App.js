import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
import MeetupPage from "./MeetupPage";
import RequestPage from "./RequestPage";

export default function App() {
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'}
  // ]);
 
  return (
    // <DropDownPicker>
    //   open={open}
    //   value={value}
    //   items={items}
    //   setOpen={setOpen}
    //   setValue={setValue}
    //   setItems={setItems}
    //   </DropDownPicker>
    <SafeAreaView>
      <Text style={styles.textstyle}>Request A Tutor</Text> 
      {/* <MeetupPage style={styles.container}/> */}
      <RequestPage style={styles.container}/>
      <StatusBar style="auto" />
      <Button style="button"
        title="Submit"
        // onPress={() => Alert.alert('Simple Button pressed')}
      />
    </SafeAreaView>
  );
}

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
