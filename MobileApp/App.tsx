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

Amplify.configure(aws_exports);

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
