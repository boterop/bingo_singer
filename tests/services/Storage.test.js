import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { StorageService } from '../../src/services';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

it('Store data', async () => {
	StorageService.storeData("key", "stored")
});

it('Retrieve data', async () => {
	StorageService.storeData("key", "stored")
	const result = await StorageService.retrieveData("key")

	expect(result).toBe("stored");
});