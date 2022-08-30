import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const NavigationStack = () => (
	<Navigator initialRouteName='home'>
		<Screen name='home' component={Home} />
	</Navigator>
);

export default NavigationStack;
