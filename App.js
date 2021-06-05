import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen from './components/HomeScreen'
import  LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'




const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
    <AppStack.Screen name="HomeScreen" component={HomeScreen} />
    <AppStack.Screen name="LoginForm" component={LoginForm} />
    <AppStack.Screen name="SignupForm" component={SignupForm} />
    </AppStack.Navigator>

    </NavigationContainer>
    );
}