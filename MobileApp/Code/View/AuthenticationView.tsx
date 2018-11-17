import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from '../../aws-exports';
import { withAuthenticator, Authenticator, SignIn, ComfirmSignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react-native';

Amplify.configure(aws_exports);

type Props = {};

export default class AuthenticationView extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Authenticator
					hideDefault={true}
					onStateChange={(authState) => console.log(authState)}
					amplifyConfig={aws_exports} >
					<SignIn />
					<SignUp username="What" />
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
