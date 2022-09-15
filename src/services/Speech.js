import * as Speech from 'expo-speech';
import StorageService from './Storage';

const SpeechService = {
	speak: text => {
		let speechOptions = {};
		StorageService.retrieveData('rate').then(r => {
			speechOptions = {
				language: 'es-CO',
				pitch: 1,
				rate: r ? parseFloat(r) : 1,
			};
			Speech.speak(text, speechOptions);
		});
	},
};

export default SpeechService;
