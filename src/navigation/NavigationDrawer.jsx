import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Config, Home } from '../screens';

const { Navigator, Screen } = createDrawerNavigator();

const NavigationDrawer = () => (
	<Navigator
		initialRouteName='home'
		screenOptions={{
			headerShown: false,
		}}>
		<Screen name='home' component={Home} />
		<Screen name='config' component={Config} />
	</Navigator>
);

export default NavigationDrawer;
