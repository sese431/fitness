basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . # # #
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.pause(200)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            . # # # .
            . # . # .
            `)
    }
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . # . # .
            . # # # .
            . # . # .
            `)
    }
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        # # . # #
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        `)
})
