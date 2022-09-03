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

let done = { B: [], I: [], N: [], G: [], O: [] };

const BoardService = {
	setBoard: table => (board = table),
	getBoard: () => board,
	getLetters: () => Object.keys(board),
	getRange,
	getDone: () => done,
	addDone: (key, value) => board[key].push(value),
};

export default BoardService;
