// import React, { useState } from 'react'
// import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import styles from './styles';
// import { firebase, firebaseApp } from '../../firebase/config'

// export default function ScheduleMeetUpScreen(props) {
//     return(
//         <View style={styles.container}>
//             <Text style={styles.entityText}>
//                 Fethics Schedule Meet Up Screen
//             </Text>
//         </View>
//     );
// };

import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase, firebaseApp } from '../../firebase/config'

export default function ScheduleMeetUpScreen(props) {

    const [course, setCourse] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [location, setLocation] = useState('')
    const userID = props.extraData.id
    const meetupRef = firebase.firestore().collection('meetups')
    
    const onAddButtonPress = () => {
        if (course.length > 0 && time.length > 0 && location.length > 0) {
            const data = {
                "Course": course,
                "Location": location,
                "Time": time,
                "Description": description,
                "User Count": 1,
                "Created By": userID,
            };
            meetupRef
                .add(data)
                .then(_doc => {
                    setCourse('')
                    setLocation('')
                    setTime('')
                    setDescription('')
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
                    placeholder='Location'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setLocation(text)}
                    value={location}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TextInput
                    style={[styles.input, {width: "90%"}]}
                    placeholder='Available Times'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setTime(text)}
                    value={time}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TextInput
                    style={[styles.input, {width: "90%", height: 300, padding: 20}]}
                    placeholder='Other Information'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    multiline={true}
                />
                <TouchableOpacity style={[styles.button, {width: "90%"}]} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Submit Meetup Request!</Text>
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