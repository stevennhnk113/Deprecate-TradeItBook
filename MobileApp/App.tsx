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
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator
	({
		SignInView: { screen: SignInView },
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
