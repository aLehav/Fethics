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

    const assignmentRef = firebase.firestore().collection('assignments')
    
    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: userID,
                createdAt: timestamp,
            };
            assignmentRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

    
    return(
        <View style={styles.container}>
            <View>
                <Image 
                    style={[styles.logo, {marginBottom: 0, paddingBottom: 0}]}
                    source={require('../../../assets/icon.png')}
                />
            </View>
            <View style={[styles.container, {width: "90%"}]}>
                <TextInput
                    style={[styles.input, {width: "90%"}]}
                    placeholder='Course Title (CRSE 101)'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setCourse(text)}
                    value={course}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TextInput
                    style={[styles.input, {width: "90%"}]}
                    placeholder='Assignment Title (Homework)'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TextInput
                    style={[styles.input, {width: "90%"}]}
                    placeholder='0'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setPrice(text)}
                    value={price}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TextInput
                    style={[styles.input, {width: "90%", height: 300, padding: 20}]}
                    placeholder='Description'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    multiline={true}
                />
                <TouchableOpacity style={[styles.button, {width: "90%"}]} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Ask for help!</Text>
                </TouchableOpacity>
            </View>
        </View>

    //     <View>
    //         <Text style={styles.other_text}>Subject</Text>
    //         <TextInput
    //             style={styles.input}
    //             onChangeText={onChangeTopic}
    //             value={subject_text}
    //         />
    //         <Text style={styles.other_text}>Topic</Text>
    //         <TextInput
    //             style={styles.input}
    //             onChangeText={onChangeTopic}
    //             value={topic_text}
    //         />
    //         <Text style={styles.other_text}>Rate</Text>
    //         <TextInput
    //             style={styles.input}
    //             onChangeText={onChangeLocation}
    //             value={location_text}
    //         />
    //         <Text style={styles.other_text}>Assignment Details</Text>
    //         <TextInput
    //             style={styles.final_input}
    //             onChangeText={onChangeExtra}
    //             value={extra_text}
    //             // placeholder="useless placeholder"
    //         />
    // </View>
    );
};