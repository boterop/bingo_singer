import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens';

const { Navigator, Screen } = createDrawerNavigator();

const NavigationDrawer = () => (
	<Navigator>
		<Screen name='B Music' component={Home} />
	</Navigator>
);

export default NavigationDrawer;
