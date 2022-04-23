import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase, firebaseApp } from '../../firebase/config'

export default function RequestScreen(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.entityText}>
                Fethics Request Screen
            </Text>
        </View>
    );
};