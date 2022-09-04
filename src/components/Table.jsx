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

const content = (letters, numbers) => {
	const values = [];
	let index = 0;
	const end = numbers[letters[0]].length;

	while (index < end) {
		values.push(
			<DataTable.Row style={styles.tableRow}>
				{letters.map(key => (
					<DataTable.Cell style={styles.tableCell}>
						<Text style={styles.cell}>{numbers[key][index]}</Text>
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
			{content(letters, board)}
		</DataTable>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 0,
	},
	tableTitle: {
		justifyContent: 'center',
		borderRightWidth: 0.2,
		borderLeftWidth: 0.2,
	},
	tableRow: {
		justifyContent: 'center',
	},
	tableCell: {
		justifyContent: 'center',
		borderRightWidth: 0.2,
		borderLeftWidth: 0.2,
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 20,
	},
	cell: {
		textAlign: 'center',
		fontSize: 13,
	},
	tableHeader: {
		backgroundColor: '#DCDCDC',
		borderRadius: 45,
	},
});

export default Table;
