import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import Login from '../components/Login';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <Text style={styles.welcome}>Welcome to</Text>
                <Text style={styles.title}>readersChoice</Text>
                <Text style={styles.titleMessage}>Swipe right to explore books!</Text>
            </View>
            {/* <Login /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50%",

    },
    welcome: {
        fontSize: 30,
        color: "maroon"
    },
    title: {
        fontSize: 50,
        color: "maroon"
    },
    titleMessage: {
        fontSize: 20,
        color: "maroon", 
    }
})

export default HomeScreen;