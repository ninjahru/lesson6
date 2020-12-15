scene.setBackgroundColor(12)

let duck: Sprite = null 
let animal: Sprite = null 
let right = true 
info.setScore(0)
info.setLife(3)

duck =  sprites.create(img`
    3 3 . . . . . . . b 5 b . . . .
    . 3 3 . . . . . . b 5 b . . . .
    . . 3 3 . . b b b b b b . . . .
    . . . 3 3 b b 5 5 5 5 5 b . . .
    . . . . b b 5 b c 5 5 d 4 c . .
    . b b b b 5 5 5 b f d d 4 4 4 b
    . b d 5 b 5 5 b c b 4 4 4 4 b .
    . . b 5 5 b 5 5 5 4 4 4 4 b . .
    . . b d 5 5 b 5 5 5 5 5 5 b . .
    . b d b 5 5 5 d 5 5 5 5 5 5 b .
    b d d c d 5 5 b 5 5 5 5 5 5 b .
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`,SpriteKind.Player)

controller.moveSprite(duck)



duck.setFlag(SpriteFlag.StayInScreen, true)

controller.left.onEvent(ControllerButtonEvent.Pressed,function(){
    if (right) {
        duck.image.flipX()
    } 

    right = false 

})


controller.right.onEvent(ControllerButtonEvent.Pressed,function(){
    if (!right) {
        duck.image.flipX()
    } 

    right = true 

})


game.onUpdateInterval(1000, function() {
    animal = sprites.create(img`
        e e e . . . . e e e . . . .
        c d d c . . c d d c . . . .
        c b d d f f d d b c . . . .
        c 3 b d d b d b 3 c . . . .
        f b 3 d d d d 3 b f . . . .
        e d d d d d d d d e . . . .
        e d f d d d d f d e . b f b
        f d d f d d f d d f . f d f
        f b d d b b d d 2 f . f d f
        . f 2 2 2 2 2 2 b b f f d f
        . f b d d d d d d b b d b f
        . f d d d d d b d d f f f .
        . f d f f f d f f d f . . .
        . f f . . f f . . f f . . .
    `,SpriteKind.Food)
    animal.setPosition(150, Math.randomRange(0,120))
    animal.setVelocity(-20, 0)

    animation.runImageAnimation(animal, [img`
        . . . . . . . . . . . . . .
        e e e . . . . e e e . . . .
        c d d c . . c d d c . . . .
        c b d d f f d d b c . . . .
        c 3 b d d b d b 3 c . . . .
        f b 3 d d d d 3 b f . . 3 .
        e d d d d d d d d e . . 3 .
        e d f d d d d f d e . b f b
        f d d f d d f d d f . f d f
        f b d d b b d d 2 b f f d f
        . f 2 2 2 2 2 2 d b b d b f
        . f d d d d d d d f f f f .
        . . f d b d f d f . . . . .
        . . . f f f f f f . . . . .
    `],100,true)
})

