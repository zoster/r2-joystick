function button () {
    buttonVal = pins.analogReadPin(AnalogPin.P2)
    if (buttonVal < 256) {
        item = 1
    } else if (buttonVal < 597) {
        item = 2
    } else if (buttonVal < 725) {
        item = 3
    } else if (buttonVal < 793) {
        item = 4
    } else if (buttonVal < 836) {
        item = 5
    } else if (buttonVal < 938) {
        item = 6
    } else {
        item = 0
    }
}
let item = 0
let buttonVal = 0
radio.setGroup(1)
basic.forever(function () {
    button()
    if (item > 0) {
        radio.sendString("" + (item))
        basic.showNumber(item)
    } else if (pins.analogReadPin(AnalogPin.P0) < 400) {
        radio.sendString("left")
        basic.showLeds(`
            . . . . .
            . # . . .
            # . . . .
            . # . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P0) > 600) {
        radio.sendString("right")
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . #
            . . . # .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) < 400) {
        radio.sendString("backward")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 600) {
        radio.sendString("forward")
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(200)
})
