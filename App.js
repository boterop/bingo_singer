import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationDrawer } from './src/navigation/';

export default function App() {
	return (
		<NavigationContainer>
			<NavigationDrawer />
		</NavigationContainer>
	);
}
