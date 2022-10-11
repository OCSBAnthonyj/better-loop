input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            sprite.move(-1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.X, 1)
            sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.X, -1)
            sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
        }
        sprite.delete()
        no += 1
        basic.showNumber(no)
        basic.pause(500)
        sprite = game.createSprite(4, 0)
    }
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let no = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(4, 0)
no = 0
