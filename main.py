from src.ui.view import View
from src.core.bingo import Bingo

bingo = Bingo([
    ("B", range(1, 10)),
    ("I", range(10, 20)),
    ("N", range(20, 30)),
    ("G", range(30, 40)),
    ("O", range(40, 51))
])

def update():
    (letter, number) = bingo.get_number()
    return letter+" "+number

ui = View(300, 200)
ui.start(update)