import React, { Component } from 'react';
import { Platform, StyleSheet, ViewStyle, Text } from 'react-native';
import { Container, Header, Content, Button, Input, Item, Form, Row, Icon, Col, Grid, View } from 'native-base';
import { ThemeColor, FontSize } from '../Styles/Theme';
import { EmailRegexString } from '../../Helpers';

// Aws Amplify
import { Auth } from 'aws-amplify';
import { from } from 'zen-observable';

export default class SignInView extends Component<any, any> {

	EmailRegex: RegExp;
	EmailItem: Item;
	SignUpButton: Button;

	constructor(props: any) {
		super(props);

		this.EmailRegex = new RegExp(EmailRegexString, 'i');
		this.EmailItem = null;
	}

	componentWillMount() {
		this.setState(() => ({
			Email: '',
			IsEmailError: false,
			Password: '',
			ConfirmPassword: '',
			IsPasswordMatch: true
		}));
	}

	OnSignUp() {
		if (this.state.Email.length == '') {
			console.log('required');
			this.setState({ IsEmailError: true, EmailErrorMessage: 'Required' });
			return;
		}

		if (!this.EmailRegex.test(this.state.Email)) {
			console.log('Invalid email');
			console.log(this.state.Email);
			this.setState({IsEmailError: true, EmailErrorMessage: 'Invalid Email'});
			return;
		}

		if (!this.state.Email.includes('@student.douglascollege.ca')) {
			console.log('Not douglas email');
			this.setState({ IsEmailError: true, EmailErrorMessage: 'Invalid Douglas College email' });
			return;
		}

		this.setState({ IsEmailError: false });
	}

	GetEmailErrorMessage() {
		if(this.state.IsEmailError) {
			return (
				<Text style={styles.ErrorText}>{this.state.EmailErrorMessage}</Text>
			);
		} else {
			return null;
		}
	}

	GetPasswordErrorMessage() {
		if (!this.state.IsPasswordMatch) {
			return (
				<Text style={styles.ErrorText}>Password not match</Text>
			);
		} else {
			return null;
		}
	}

	render() {
		return (
			<Container>
				<Grid>
					<Col style={styles.leftRightPad}></Col>
					<Col style={styles.formContainer}>
						<Item
							ref={(obj) => this.EmailItem = obj}
							style={styles.formInputInputStyles as ViewStyle}>
							<Input 
								placeholder='User Name'
								onChangeText={(text) => this.setState({Email: text})}/>
						</Item>
						{this.GetEmailErrorMessage()}
						<Item style={styles.formInputInputStyles as ViewStyle}>
							<Input
								placeholder='Password'
								secureTextEntry
								onChangeText={(text) => this.setState({ Password: text })}/>
						</Item>
						<Item style={styles.formInputInputStyles as ViewStyle}>
							<Input
								placeholder='Confirm Password'
								secureTextEntry
								onChangeText={(text) => this.setState({ ConfirmPassword: text })}/>
						</Item>
						{this.GetPasswordErrorMessage()}
						<Button
							ref={(obj) => this.SignUpButton = obj}
							full bordered
							style={styles.signInButton as ViewStyle}
							onPress={() => this.OnSignUp()}>
							<Text>SIGN UP</Text>
						</Button>
					</Col>
					<Col style={styles.leftRightPad}></Col>
				</Grid>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	temp: {
		color: ThemeColor.Blue1
	},
	formContainer: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	leftRightPad: {
		flex: 1
	},
	signInButton: {
		borderColor: ThemeColor.Blue1,
		marginTop: 10
	},
	signUpButton: {
		borderColor: ThemeColor.Blue1,
		marginTop: 10,
		padding: 5
	},
	formInputContainerStyles: {
		marginTop: 20
	},
	formInputInputStyles: {
		fontSize: FontSize.H7,
		padding: 0
	},
	ErrorText: {
		fontSize: FontSize.H9,
		color: ThemeColor.Error,
		alignSelf: 'flex-end'
	}
});