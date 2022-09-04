const getRange = (min, max) => {
	let list = [];
	for (let i = min; i <= max; i++) {
		list.push(i);
	}
	return list;
};

let board = {
	B: getRange(1, 15),
	I: getRange(16, 30),
	N: getRange(31, 45),
	G: getRange(46, 60),
	O: getRange(61, 75),
};

const BoardService = {
	setBoard: table => (board = table),
	getBoard: () => board,
	getLetters: () => Object.keys(board),
	getRange,
	checkGameOver: dones => {
		const letters = Object.keys(board);

		for (let i = 0; i < letters.length; i++) {
			const list = dones[letters[i]];
			const boardList = board[letters[i]];

			if (list === undefined) {
				return false;
			}

			if (list.length !== boardList.length) {
				return false;
			}
		}

		return true;
	},
};

export default BoardService;
