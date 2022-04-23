//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button, Image} from 'react-native';
//import all the components we are going to use.
 
export default class FirstPage extends Component {
 static navigationOptions = {
   title: 'HomePage',
   headerShown: false,
   //Sets Header text of Status Bar
   headerStyle: {
     backgroundColor: '#f4511e',
     //Sets Header color
   },
   headerTintColor: '#fff',
   //Sets Header text color
   headerTitleStyle: {
     fontWeight: 'bold',
     //Sets Header text style
   },
 };
 
 render() {
   const { navigate } = this.props.navigation;
   return (
    <View style={styles.container}>

        <Image
        style={styles.tinyLogo}
        source={require('./cat3.jpg')}
        />

        <Button style={styles.button} title='Go next'
        onPress={() =>navigate('ProfilePage')}
        />

        <Button style={styles.button} title='Match'
        />



    </View>
   );
 }
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 tinyLogo: {
    width: 300,
    height: 300,
  },
});
