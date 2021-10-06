import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Feature(props) {
	const { name, value } = props;

	let temp = '';

	for (i = 0; i < value; i++) {
		temp += '🌟';
	}

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.value}>{temp}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	name: {},
	value: {
		display: 'flex',
		flexDirection: 'row',
	},
});
export default Feature;
