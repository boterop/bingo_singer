import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Styles } from '../styles';

const ConfigIo = ({ title, speed, setSpeed }) => (
	<View style={Styles.configInline}>
		<Text style={Styles.configText}>{title}</Text>
		<TextInput
			style={Styles.configIo}
			returnKeyType='next'
			keyboardType='numeric'
			enablesReturnKeyAutomatically
			blurOnSubmit={false}
			onChangeText={e => setSpeed(e)}
			value={speed}
		/>
	</View>
);

export default ConfigIo;
