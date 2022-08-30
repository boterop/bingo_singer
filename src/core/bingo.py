import random

class Bingo:
    def __init__(self, table):
        self.table = table
        self.numbers = []
        self.max_numbers = self.get_max_numbers(table)
    
    def get_max_numbers(table):
        return 50

    def get_number(self):
        if len(self.numbers) >= self.max_numbers:
            return ("N", "LEON")
        (letter, n) = random.choice(self.table)
        number = random.choice(n)
        self.current = (letter, number)
        return (letter, str(number)) if self.is_valid(number) else self.get_number()

    def get_done(self):
        return self.numbers
    
    def is_valid(self, number):
        if number in self.numbers:
            return False
        else:
            self.numbers.append(self.current)
            return True