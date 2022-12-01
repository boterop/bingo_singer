import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultKey = '@bingo_singer:';

const StorageService = {
	storeData: async (key, value) => {
		try {
			await AsyncStorage.setItem(defaultKey + key, value);
		} catch (e) {
			alert('Error saving data ' + value);
		}
	},
	retrieveData: async key => {
		try {
			const value = await AsyncStorage.getItem(defaultKey + key);
			if (value !== null) {
				return '' + value;
			} else {
				return undefined;
			}
		} catch (e) {
			alert('Error loading data ' + key);
		}
	},
};

export default StorageService;
