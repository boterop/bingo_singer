import PySimpleGUI as sg

class View:
    def __init__(self, width, height):
        layout = [
            [
                sg.Text("Start", key="-RESULT-")
            ],
            [sg.Button("NEXT")]
        ]
        self.window = sg.Window(
            "Bingo Singer",
            layout,
            margins=(width, height)
        )

    def start(self, callback):
        while True:
            event, values = self.window.read()
            
            if event == sg.WIN_CLOSED:
                break

            if event == "NEXT":
                self.window["-RESULT-"].update(callback())
                
        self.window.close()