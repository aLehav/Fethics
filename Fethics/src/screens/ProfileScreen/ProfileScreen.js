import React, { useEffect, useState } from 'react'
import { Image, FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function ProfileScreen(props) {

    const userID = props.extraData.id
    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <View>
                <Image 
                    style={[styles.logo, {marginBottom: 0, paddingBottom: 0}]}
                    source={require('../../../assets/icon.png')}
                />
                <Image 
                    style={[styles.logo, {width:100, marginTop: 0, paddingTop: 0, marginBottom: 50}]}
                    source={require('../../../assets/user-solid.svg')}
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
        </View>
    )
}