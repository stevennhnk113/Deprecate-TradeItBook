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
import SignInView from './Code/View/Authentication/SignInView';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
	Home: {
		screen: SignInView
	}
});

type Props = {};

export default class App extends Component<Props> {
	render() {
		return (
			<View>
				<Text>Helo world</Text>
			</View>
		);
	}
}
