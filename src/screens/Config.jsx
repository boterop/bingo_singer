import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Styles } from '../styles';
import { StorageService } from '../services';
import { ConfigIo } from '../components';

const Config = props => {
	const [speed, setSpeed] = useState(0);
	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			StorageService.retrieveData('speed').then(s => setSpeed(s));
		} else {
			StorageService.storeData('speed', speed);
		}
	}, [speed]);

	return (
		<View style={Styles.container}>
			<ConfigIo speed={speed} setSpeed={setSpeed} />
		</View>
	);
};

export default Config;
