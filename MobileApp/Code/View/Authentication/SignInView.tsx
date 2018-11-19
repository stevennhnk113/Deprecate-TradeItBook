import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text, Input, Item } from 'native-base';
import { ThemeColor, FontSize } from '../Styles/Theme';

export default class SignInView extends Component<any, object> {
	OnSignIn() {

	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.leftRightPad}></View>
				<View style={styles.formContainer}>
					<Text style={styles.formLabelLabelStyles}>Email Address</Text>
					<Item underline>
						<Input
							placeholder='Enter your .edu email' />
					</Item>

					<Text 
						style={styles.formLabelContainerStyles}>
							Password
					</Text>
					<Item>
						<Input
							placeholder='Enter your password here' />
					</Item>

					<Button
						style={styles.signInButton}
						title='SIGN IN'
						onPress={() => this.OnSignIn()} />
				</View>
				<View style={styles.leftRightPad}></View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: ThemeColor.Blue1
	},
	formContainer: {
		flex: 5
	},
	leftRightPad: {
		flex: 1
	},
	signInButton: {
		backgroundColor: ThemeColor.Blue1,
		marginTop: 10
	},
	formInputContainerStyles: {
		borderBottomColor: ThemeColor.Grey2,
		borderBottomWidth: 2,
	},
	formInputInputStyles: {
		fontSize: FontSize.H7,
		padding: 0
	},
	formLabelLabelStyles: {
		fontSize: FontSize.H5,
		padding: 0,
		marginTop: 10,
		backgroundColor: ThemeColor.Blue3
	},
	formLabelContainerStyles: {
		padding: 0,
		margin: 0,
		backgroundColor: ThemeColor.Grey2
	}
});