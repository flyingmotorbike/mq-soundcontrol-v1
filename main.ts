DFRobotMaqueenPlusV2.init()
let P = true
basic.forever(function () {
    if (input.soundLevel() > 120) {
        P = !(P)
        if (P == true) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 100)
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eOpen)
        } else {
            DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eClose)
        }
        basic.pause(200)
    }
})
