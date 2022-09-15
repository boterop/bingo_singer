import Slider from '@react-native-community/slider';
import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from '../styles';

const ConfigIo = ({ title, value, setValue, maxValue, steps }) => (
	<View style={Styles.configInline}>
		<Text style={Styles.configText}>{title}</Text>
		<Slider
			style={{ width: 200, height: 40 }}
			minimumValue={0}
			maximumValue={maxValue}
			minimumTrackTintColor='#FFFFFF'
			maximumTrackTintColor='#000000'
			onValueChange={e => setValue(e.toFixed(2))}
			value={value}
			step={steps}
		/>

		<Text>{value}</Text>
	</View>
);

export default ConfigIo;
