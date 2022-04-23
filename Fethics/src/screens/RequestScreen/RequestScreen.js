import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase, firebaseApp } from '../../firebase/config'

export default function RequestScreen(props) {

    const [title, setTitle] = useState('')
    const [course, setCourse] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const userID = props.extraData.id
    const assignmentRef = firebase.firestore().collection('assignments')
    
    const onAddButtonPress = () => {
        if (title.length > 0 && course.length > 0 && price > 0 && description.length > 0) {
            const data = {
                "Course": course,
                "Title": title,
                "Price": price,
                "Description": description,
                "Accepted By": "",
                "Created By": userID,
            };
            assignmentRef
                .add(data)
                .then(_doc => {
                    setTitle('')
                    setCourse('')
                    setPrice(0)
                    setDescription('')
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.entityText}>
                Fethics Request Screen
            </Text>
            <View style={styles.container}>
                
                <TextInput
                    style={styles.input}
                    placeholder='Course Title (CRSE 101)'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setCourse(text)}
                    value={course}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Assignment Title (Homework)'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='0'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setPrice(text)}
                    value={price}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Assignment Title (Homework)'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};