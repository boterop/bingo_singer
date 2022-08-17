import React from 'react';
import { View, Text } from 'react-native';

const Home = ({ navigation }) => {
	const goTo = page => {
		navigation.navigate(page);
	};

	return (
		<View>
			<Text>Home</Text>
		</View>
	);
};

export default Home;
