def button():
    pass
item = 0
buttonVal = 0
stickY = 0
stickX = 0
wait = 0

def on_forever():
    global wait, stickX, stickY, buttonVal, item
    if not (wait):
        wait = 1
        stickX = pins.analog_read_pin(AnalogPin.P0)
        stickY = pins.analog_read_pin(AnalogPin.P1)
        buttonVal = pins.analog_read_pin(AnalogPin.P2)
        if buttonVal < 256:
            item = 1
        elif buttonVal < 597:
            item = 2
        elif buttonVal < 725:
            item = 3
        elif buttonVal < 793:
            item = 4
        elif buttonVal < 836:
            item = 5
        elif buttonVal < 938:
            item = 6
        else:
            item = 0
        if item > 0:
            basic.show_number(item)
        else:
            basic.clear_screen()
        wait = 0
basic.forever(on_forever)
