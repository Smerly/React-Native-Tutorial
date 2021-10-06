import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	FlatList,
	SafeAreaView,
	TextInput,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';

import { cats } from './breeds';
import Item from './item';

// SafeAreaView checks what your phone is and helps make it all fit in

export default function App() {
	const [search, setSearch] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.kav}
			>
				<TextInput
					style={styles.textins}
					placeholder="Search..."
					onChangeText={setSearch}
					value={search}
				/>
				<StatusBar style="auto" />
				<View style={styles.listContainer}>
					<FlatList
						data={cats.filter((item) => item.breed.includes(search))}
						renderItem={({ item, index }) => {
							return <Item data={item} index={index} />;
						}}
						keyExtractor={(item) => item.breed}
					/>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	listContainer: {
		width: '100%',
	},
	textins: {
		padding: 10,
		fontSize: 24,
	},

	kav: {
		// flex: 1,
		// justifyContent: 'center',
		width: '100%',
		marginBottom: 50,
	},
});
