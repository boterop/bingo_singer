import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens';

const { Navigator, Screen } = createDrawerNavigator();

const NavigationDrawer = () => (
	<Navigator>
		<Screen name='home' component={Home} />
	</Navigator>
);

export default NavigationDrawer;
