import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Styles } from '../styles';
import { StorageService } from '../services';
import { ConfigIo } from '../components';

const Config = props => {
	const [speed, setSpeed] = useState(6);
	const [rate, setRate] = useState(1.0);
	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			StorageService.retrieveData('speed').then(s => setSpeed(s));
			StorageService.retrieveData('rate').then(r => setRate(r));
		} else {
			StorageService.storeData('speed', speed.toString());
			StorageService.storeData('rate', rate.toString());
		}
	}, [speed, rate]);

	return (
		<View style={Styles.container}>
			<ConfigIo title='Game speed:' speed={speed} setSpeed={setSpeed} />
			<ConfigIo title='Voice speed:' speed={rate} setSpeed={setRate} />
		</View>
	);
};

export default Config;
