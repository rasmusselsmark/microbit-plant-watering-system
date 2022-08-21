input.onButtonPressed(Button.A, function () {
    if (Enabled == 0) {
        Enabled = 1
    } else {
        Enabled = 0
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
input.onSound(DetectedSound.Loud, function () {
    if (Display == 0) {
        Display = 1
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        Display = 0
    }
})
input.onButtonPressed(Button.B, function () {
    Level += 5
    if (Level > 100) {
        Level = 0
    }
})
let Display = 0
let Enabled = 0
let Level = 0
Level = 0
Enabled = 0
Display = 1
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
    if (Enabled == 1) {
        if (Display == 1) {
            basic.showNumber(smarthome.ReadSoilHumidity(AnalogPin.P1))
            basic.showNumber(Level)
        } else {
            basic.clearScreen()
        }
        if (smarthome.ReadSoilHumidity(AnalogPin.P1) < Level) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
