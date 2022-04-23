import React, { useEffect, useState } from 'react'
import { Image, FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen(props) {

    const userID = props.extraData.id
    const navigation = props.navigation

    const [assignments, setAssignments] = useState([])

    const assignmentRef = firebase.firestore().collection('assignments')

    useEffect(() => {
        assignmentRef
            // .where("Created By", "!=", userID)
            .where("Created By", "==", userID)
            // .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newAssignments = []
                    querySnapshot.forEach(doc => {
                        const assignment = doc.data()
                        assignment.id = doc.id
                        newAssignments.push(assignment)
                    });
                    setAssignments(newAssignments)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const renderEntity = ({item, index}) => {
        return (
            <View style={[styles.acceptBox, {width: "100%"}]}>
              <View style={{flexDirection: "row"}}>
                <View style={{width: "80%"}}>
                  <Text style={styles.class}>{item.Course}</Text>
                  <Text style={styles.assignment}>{item.Title}</Text>
                </View>
                <Text style={styles.price}>${item.Price}</Text>
              </View>
              <View>
                <Text style={styles.description}>{item.Description}</Text>
              </View>
              <View style={{flexDirection: "row"}}>
                <TouchableOpacity style={styles.smallButton}>
                    <Text>Open File</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.smallButton}>
                  <Text>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
        )
    }

    const UserRequests = () => {
        return(
            <View style={[styles.container, {width:'60%', marginTop:50}]}>
                <Text style={styles.entityText}>
                    My Requests
                </Text>
                {/* <View style={styles.formContainer}>
                    
                    <TextInput
                        style={styles.input}
                        placeholder='Add new entity'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setEntityText(text)}
                        value={entityText}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View> */}
                { assignments && (
                    // <View style={styles.greyContainer}>
                        <FlatList style={{width:'100%'}}
                            data={assignments}
                            renderItem={renderEntity}
                            keyExtractor={(item) => item.id}
                            removeClippedSubviews={true}
                        />
                    // </View>
                )}
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View>
                <Image 
                    style={[styles.logo, {marginBottom: 0, paddingBottom: 0}]}
                    source={require('../../../assets/icon.png')}
                />
                <Ionicons
                    size={100}
                    style={[styles.logo, {width:100, marginTop: 0, paddingTop: 0, marginBottom: 50}]}
                    name="ios-person-circle-outline"
                />
            </View>
            <View style={styles.greyContainer}>
                <Text style={styles.entityText}>
                    UserID: {userID}
                </Text>
            </View>
            <TouchableOpacity style={styles.button}
            onPress={() => {
                navigation.navigate('SignedInScreen', {screen: 'Request Help'})
                }}>
                <Text style={styles.buttonText}>
                    Request Help
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => {
                navigation.navigate('SignedInScreen', {screen: 'Schedule Meet Up'})
                }}>
                <Text style={styles.buttonText}>
                    Schedule Meet Up
                </Text>
            </TouchableOpacity>
            <UserRequests />
        </View>
    )
}