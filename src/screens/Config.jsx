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
			StorageService.retrieveData('speed').then(s => setSpeed(s === null || s === undefined ? '6' : s));
			StorageService.retrieveData('rate').then(r => setRate(r === null || r === undefined ? '1' : r));
		} else {
			const s = speed === '' ? '6' : speed.toString();
			const r = rate === '' ? '1' : rate.toString();
			StorageService.storeData('speed', s);
			StorageService.storeData('rate', r);
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
