radio.onReceivedNumber(function (receivedNumber) {
    let receivedString = ""
    if (receivedString == "POWER") {
        encendido = !(encendido)
        led.setBrightness(125)
        led.enable(encendido)
    }
})
let encendido = false
radio.setGroup(1)
encendido = false
led.enable(encendido)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
