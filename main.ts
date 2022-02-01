input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    soundExpression.sad.playUntilDone()
})
input.onButtonPressed(Button.AB, function () {
    soundExpression.giggle.playUntilDone()
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
basic.showIcon(IconNames.Asleep)
soundExpression.yawn.playUntilDone()
basic.showIcon(IconNames.Silly)
basic.showIcon(IconNames.Silly)
basic.forever(function () {
	
})
