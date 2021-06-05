import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import color from './config/color';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen(props) {
    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate("LoginForm");
    }
    function navigateToSignup() {
        navigation.navigate("SignupForm");
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}><Text style={ styles.title } >collab</Text></View>
            <View style={styles.buttonview}>  
            <TouchableOpacity activeOpacity={0.95} style={styles.button} onPress={()=>navigateToLogin()}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.95} style={styles.button} onPress={()=>navigateToSignup()}>
                <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
            </View> 
        </View>
    );
}  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary,
        alignItems: 'center',
        justifyContent:'center'
    },
    logo: {
        justifyContent:'center',
        bottom:50
    },
    buttonview: {
        alignItems:'center',
        top:120,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    button: {
        backgroundColor: color.secondary,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop:30,
        width: '80%',
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        fontFamily: 'Inter_900Black',
        color:'#fff',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        color:'rgba( 23, 32, 42, 0.7)',
        fontSize: 25,
        fontWeight:'bold'
      }  
})
