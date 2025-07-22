MFRC522.Init()
basic.forever(function () {
    serial.writeLine("" + (MFRC522.getID()))
})
