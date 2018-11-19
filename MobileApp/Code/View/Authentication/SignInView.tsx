import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
// import Styles from '../styles';

type Props = {};

var Styles = require('../Styles');

export default class SignInView extends Component<Props> {
	render() {
		return (
			<View>
				<Text>Helo world</Text>
				<Button style={Styles.Button} title='BUTTONxxxx'/>
				<Button title='BUTTONxxddddxx'/>
			</View>
		);
	}
}