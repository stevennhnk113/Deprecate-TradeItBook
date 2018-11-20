/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

// View
import SplashScreen from './Code/View/SplashScreen';
import SignInView from './Code/View/Authentication/SignInView';
import SignUpView from './Code/View/Authentication/SignUpView';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AuthenticationNavigator =  createStackNavigator
	({
		SignInView: { screen: SignInView },
		SignUpView: { screen: SignUpView }
	},
	{
		headerMode: 'none'
	});

const AppNavigator = createStackNavigator
	({
		Authentication: { screen: AuthenticationNavigator },
		SplashScreen: { screen: SplashScreen }
	},
	{
		headerMode: 'none'
	});
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<any, object> {
	render() {
		return (
			<AppContainer />
		)
	}
}
