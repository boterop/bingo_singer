import PySimpleGUI as sg

class View:
    def __init__(self, table):
        (
            table_headings,
            table_values,
            table_height
        ) = table
        layout = [
            [sg.Button("CLOSE")],
            [
                sg.Text(
                    "Start",
                    font=('Courier 12', 150),
                    key="-RESULT-"
                )
            ],
            [sg.Button("NEXT")],
            [
                sg.Table(
                    headings=table_headings,
                    values=table_values,
                    auto_size_columns=False,
                    justification='center',
                    num_rows=table_height,
                    key='-TABLE-'
                )
            ]
        ]
        self.window = sg.Window(
            "Bingo Singer",
            layout,
            font=('Courier 12', 22),
            element_justification='c'
        ).Finalize()
        self.window.Maximize()

    def start(self, callback):
        while True:
            event, values = self.window.read()
            
            if event == "CLOSE":
                break

            if event == "NEXT":
                (result, table) = callback()
                self.window["-RESULT-"].update(result)
                # self.window["-TABLE-"].update(table)
                
        self.window.close()