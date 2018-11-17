/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator, Authenticator, SignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react-native';
Amplify.configure(aws_exports);

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu helo',
});

type Props = {};

export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Authenticator
					onStateChange={(authState) => console.log(authState)}
					amplifyConfig={aws_exports} >
				</Authenticator>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
