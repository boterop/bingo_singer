import * as Speech from 'expo-speech';

const speechOptions = {
	language: 'es-CO',
	pitch: 1,
	rate: 0.5,
};

const SpeechService = {
	speak: text => Speech.speak(text, speechOptions),
};

export default SpeechService;