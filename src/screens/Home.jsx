import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import { Table } from '../components';
import { BoardService, Random, SpeechService } from '../services';
import { Styles } from '../styles';

const Home = ({ navigation }) => {
	const [result, setResult] = useState('');
	const [looping, setLooping] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [done, setDone] = useState({});
	const [table, setTable] = useState(null);
	const [timeoutId, setTimeoutId] = useState(null);

	const isInitialMount = useRef(true);
	const seconds = 6;

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			SpeechService.speak("");
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
