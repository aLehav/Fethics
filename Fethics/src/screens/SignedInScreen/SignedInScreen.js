import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen, RequestScreen, MeetUpScreen, AcceptScreen, ScheduleMeetUpScreen } from '../';

const Tab = createBottomTabNavigator();

export default function SignedInScreen(props) {

    const user = props.extraData
    return (
            <Tab.Navigator>
                <>
                <Tab.Screen name="Profile">
                    {props => <ProfileScreen {...props} extraData={user} />}
                </Tab.Screen>
                <Tab.Screen name="Help Others">
                    {props => <AcceptScreen {...props} extraData={user} />}
                </Tab.Screen>
                <Tab.Screen name="Request Help">
                    {props => <RequestScreen {...props} extraData={user} />}
                </Tab.Screen>
                <Tab.Screen name="Meet Up">
                    {props => <MeetUpScreen {...props} extraData={user} />}
                </Tab.Screen>
                <Tab.Screen name="Schedule Meet Up">
                    {props => <ScheduleMeetUpScreen {...props} extraData={user} />}
                </Tab.Screen>
                </>
            </Tab.Navigator>
  );
}