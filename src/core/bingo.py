import random

class Bingo:
    def __init__(self, table):
        self.table = table
        self.numbers = []
        self.max_numbers = 0
        self.table_headings = []
        self.table_values = []
        for (letter, numbers) in self.table:
            self.table_headings.append(letter)
            self.max_numbers = self.max_numbers + len(numbers)
            self.table_values.append([*numbers])
        self.table_values = self.transpose(self.table_values)

    def transpose(self, table):
        return [[table[j][i] for j in range(len(table))] for i in range(len(table[0]))]

    def get_number(self):
        if len(self.numbers) >= self.max_numbers:
            return ("N", "LEON")
        (letter, n) = random.choice(self.table)
        number = random.choice(n)
        self.current = (letter, number)
        return (letter, str(number)) if self.is_valid(number) else self.get_number()

    def get_done(self):
        return self.numbers

    def get_table(self):
        return (
            self.table_headings,
            self.table_values,
            int(self.max_numbers / len(self.table_headings))
        )
    
    def is_valid(self, number):
        if number in self.numbers:
            return False
        else:
            self.numbers.append(self.current)
            return True