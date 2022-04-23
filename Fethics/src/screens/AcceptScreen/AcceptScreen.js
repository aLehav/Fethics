import React, { useState, useEffect } from 'react'
import { Image, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase, firebaseApp } from '../../firebase/config'

export default function AcceptScreen(props) {
    
    const [assignments, setAssignments] = useState([])

    const assignmentRef = firebase.firestore().collection('assignments')
    const userID = props.extraData.id
    const navigation = props.navigation

    useEffect(() => {
        assignmentRef
            // .where("Created By", "!=", userID)
            .where("Accepted By", "==", "")
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
            <View style={[styles.acceptBox, {width: "60%"}]}>
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
                  <Text>Accept</Text>
                </TouchableOpacity>
              </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <View>
                <Image 
                    style={[styles.logo, {marginBottom: 0, paddingBottom: 0}]}
                    source={require('../../../assets/icon.png')}
                />
            </View>
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
                    <FlatList
                        data={assignments}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                // </View>
            )}
        </View>
    );
};