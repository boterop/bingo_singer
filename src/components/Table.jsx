import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const header = letters => (
	<DataTable.Header style={styles.tableHeader}>
		{letters.map(letter => {
			return (
				<DataTable.Title style={styles.tableTitle}>
					<Text style={styles.title}>{letter}</Text>
				</DataTable.Title>
			);
		})}
	</DataTable.Header>
);

const isDone = (done, key, value) =>
	done[key] === undefined ? true : !done[key].includes(value);

const content = (letters, numbers, done) => {
	const values = [];
	const end = numbers[letters[0]].length;
	let index = 0;

	while (index < end) {
		values.push(
			<DataTable.Row
				key={index}
				style={[styles.tableRow, { top: index * 20 + 48 }]}>
				{letters.map(key => (
					<DataTable.Cell style={styles.tableCell}>
						<Text
							includeFontPadding={false}
							style={
								isDone(done, key, numbers[key][index])
									? styles.cell
									: styles.cellDone
							}>
							{numbers[key][index]}
						</Text>
					</DataTable.Cell>
				))}
			</DataTable.Row>,
		);
		index += 1;
	}

	return values.map(value => value);
};

const Table = ({ letters, board, done }) => {
	return (
		<DataTable style={styles.container}>
			{header(letters)}
			{content(letters, board, done)}
		</DataTable>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 0,
	},
	tableTitle: {
		justifyContent: 'center',
	},
	tableRow: {
		borderBottomWidth: 0,
		overflow: 'hidden',
		position: 'absolute',
		width: '100%',
	},
	tableCell: {
		justifyContent: 'center',
		borderRightWidth: 0.2,
		borderLeftWidth: 0.2,
		borderBottomWidth: 0.2,
		borderTopWidth: 0.2,
		height: 20,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	cell: {
		fontSize: 15,
	},
	cellDone: {
		fontSize: 15,
		color: '#ff0000',
	},
	tableHeader: {
		backgroundColor: '#ff0',
		borderRadius: 45,
	},
});

export default Table;
