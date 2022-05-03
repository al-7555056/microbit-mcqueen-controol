radio.onReceivedValue(function (name, value) {
    if (name == "motor am") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, value)
    }
    if (name == "motor iz") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, value)
    }
    if (name == "motor de") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, value)
    }
    if (name == "luz iz") {
        if (value == 1) {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        } else {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    }
    if (name == "luz de") {
        if (value == 1) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        } else {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        }
    }
})
let luz_de = 0
let luz_iz = 0
radio.setGroup(125)
let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P1)) {
        radio.sendValue("motor am", 255)
    } else if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1)) {
        radio.sendValue("motor iz", 255)
    } else if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P1)) {
        radio.sendValue("motor de", 255)
    } else {
        radio.sendValue("motor am", 0)
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P1)) {
        luz_iz += 1
        if (luz_iz == 2) {
            luz_iz = 0
        }
        radio.sendValue("luz iz", luz_iz)
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P1)) {
        luz_de += 1
        if (luz_de == 2) {
            luz_de = 0
        }
        radio.sendValue("luz de", luz_de)
    }
})
