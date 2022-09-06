import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StatusBar, Button, Pressable } from 'react-native';
import { Table } from '../components';
import {
	BoardService,
	Random,
	SpeechService,
	StorageService,
} from '../services';
import { Styles } from '../styles';

const Home = ({ navigation }) => {
	const [result, setResult] = useState('');
	const [looping, setLooping] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [done, setDone] = useState({});
	const [table, setTable] = useState(null);
	const [timeoutId, setTimeoutId] = useState(null);
	const [seconds, setSeconds] = useState(6);

	const isInitialMount = useRef(true);

	useEffect(() => {
		StorageService.retrieveData('speed').then(s => setSeconds(s | 6));
		if (isInitialMount.current) {
			isInitialMount.current = false;
			SpeechService.speak('');
			setFirstValues();
		} else {
			if (!looping) {
				clearTimeout(timeoutId);
			}
			setTimeoutId(setTimeout(() => start(), seconds * 1000));
		}
	}, [looping, result]);

	useEffect(() => {
		if (gameOver) {
			setResult('END');
		}
	}, [gameOver]);

	const setFirstValues = () => {
		StorageService.retrieveData('speed').then(s => {
			if (s === undefined || s === '') {
				StorageService.storeData('speed', '6');
			}
		});
		StorageService.retrieveData('rate').then(r => {
			if (r === undefined || r === '') {
				StorageService.storeData('rate', '1');
			}
		});
	};

	const goTo = page => {
		navigation.navigate(page);
	};

	const start = () => {
		if (looping && !gameOver) {
			const result = getNextNumber();
			setTable(
				<Table
					done={done}
					board={BoardService.getBoard()}
					letters={BoardService.getLetters()}
				/>,
			);
			SpeechService.speak(result);
		}
	};

	const reset = () => {
		setLooping(false);
		setGameOver(false);
		setResult('');
		setDone({});
		setTable(null);
		setTimeoutId(null);
	};

	const addDone = (key, value) => {
		const update = done;
		if (done[key] === undefined) {
			update[key] = [value];
		} else {
			update[key].push(value);
		}
		setDone(update);
	};

	const isValid = (key, value) =>
		done[key] === undefined ? true : !done[key].includes(value);

	const getNextNumber = () => {
		const letters = BoardService.getLetters();
		const key = letters[Random(0, letters.length)];
		const list = BoardService.getBoard()[key];
		const result = list[Random(0, list.length)];

		if (isValid(key, result)) {
			setResult(key + '-' + result);

			addDone(key, result);

			return key + '..' + result;
		} else {
			const isGameOver = BoardService.checkGameOver(done);
			setGameOver(isGameOver);
			return isGameOver ? true : getNextNumber();
		}
	};

	return (
		<View style={Styles.inline}>
			<View style={Styles.table}>{table}</View>
			<View style={Styles.container}>
				<StatusBar hidden />
				<View>
					<Pressable style={Styles.resetButton} onPress={() => reset()}>
						<Text style={Styles.resetButtonText}>RESET</Text>
					</Pressable>
					<Text style={Styles.text}>{result}</Text>
					<Button
						onPress={() => setLooping(!looping)}
						title={looping ? 'PAUSE' : 'START'}
					/>
				</View>
			</View>
		</View>
	);
};

export default Home;
