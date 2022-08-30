from src.ui.view import View
from src.core.bingo import Bingo

bingo = Bingo([
    ("B", range(1, 16)),
    ("I", range(16, 31)),
    ("N", range(31, 46)),
    ("G", range(46, 61)),
    ("O", range(61, 76))
])

def update():
    (letter, number) = bingo.get_number()
    return (letter+" "+number, bingo.get_table())

ui = View(bingo.get_table())
ui.start(update)