import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Feature from './feature';

function Item(props) {
	const { data, index } = props;
	const { breed } = data;
	const keys = Object.keys(data).filter((key) => key !== 'breed');

	// const loop = (val) => {
	// 	const temp = [];
	// 	for (i = 0, i < [...Array(val).keys()]; i++; ) {
	// 		temp.append('🌟');
	// 	}
	// 	return temp;
	// };

	const average = (
		keys.reduce((acc, key) => acc + data[key], 0) / keys.length
	).toFixed(1);
	return (
		<View style={styles.container}>
			<View style={styles.contentWrapper}>
				<Text style={styles.label}>
					{index + 1}. {breed} {average}
				</Text>
				{keys.map((key) => (
					// <Text style={styles.desc}>
					// 	{key} {data[key]} {}
					// </Text>
					<Text>
						<Feature name={key} value={data[key]} />
					</Text>
				))}
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 10,
		margin: 1,
	},
	label: {
		fontSize: 28,
		display: 'flex',
		flexDirection: 'column',
	},

	contentWrapper: {
		display: 'flex',
		flexDirection: 'column',
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		marginBottom: 5,
		paddingBottom: 30,
	},
});
export default Item;
