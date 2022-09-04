import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import { BoardService, Random, SpeechService } from '../services';
import { Styles } from '../styles';

const Home = ({ navigation }) => {
	const [result, setResult] = useState('');
	const [looping, setLooping] = useState(false);
	const isInitialMount = useRef(true);
	const seconds = 6;

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			setTimeout(() => start(), seconds * 1000);
		}
	}, [looping, result]);

	const goTo = page => {
		navigation.navigate(page);
	};

	const start = () => {
		console.log(looping);
		if (looping) {
			const result = getNextNumber();
			SpeechService.speak(result);
		}
	};

	const getNextNumber = () => {
		const letters = BoardService.getLetters();
		const key = letters[Random(0, letters.length)];
		const list = BoardService.getBoard()[key];
		const result = list[Random(0, list.length)];

		setResult(key + '-' + result);

		return key + '.' + result;
	};

	return (
		<View style={Styles.container}>
			<StatusBar hidden />
			<Text style={Styles.text}>{result}</Text>
			<Button
				onPress={() => setLooping(!looping)}
				title={looping ? 'PAUSE' : 'START'}
			/>
		</View>
	);
};

export default Home;
