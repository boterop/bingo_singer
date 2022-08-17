import React from 'react';
import { Home } from '../src/screens';
import Api from '../App';
import { create } from 'react-test-renderer';

jest.mock('react-native-reanimated', () => {
	const Reanimated = require('react-native-reanimated/mock');

	Reanimated.default.call = () => {};

	return Reanimated;
});
it('Home should be the first screen', async () => {
	const result = create(<Api />).toJSON();
	const home = create(<Home />).toJSON();

	expect(JSON.stringify(result)).toMatch(JSON.stringify(home));
});
