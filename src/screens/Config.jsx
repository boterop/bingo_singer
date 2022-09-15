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
			StorageService.retrieveData('speed').then(s =>
				setSpeed(s === null || s === undefined ? '6' : s),
			);
			StorageService.retrieveData('rate').then(r =>
				setRate(r === null || r === undefined ? '1' : r),
			);
		} else {
			StorageService.storeData('speed', speed.toString());
			StorageService.storeData('rate', rate.toString());
		}
	}, [speed, rate]);

	return (
		<View style={Styles.container}>
			<ConfigIo
				title='Game speed:'
				steps={0.2}
				maxValue={15}
				value={speed}
				setValue={setSpeed}
			/>
			<ConfigIo
				title='Voice speed:'
				steps={0.1}
				maxValue={2}
				value={rate}
				setValue={setRate}
			/>
		</View>
	);
};

export default Config;
