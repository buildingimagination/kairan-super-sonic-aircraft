sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
})
let Rotten_stars: Sprite = null
let Star: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444222222222ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444444222222222fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444422244442222222fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444244444442222222222222fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444fffffff222244222244444422222222222ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222244444444444444444444444422442222222222fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222442422242222222222ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222244424444222222222fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222444224422222222ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222444422222222244422222222222222222444444442222222fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222224444424424222222244422222222222222222222222222424422222fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222444422224422242222244422222222222222222222222222222442442222ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222422222222224222244222222222222244222222222222555222244442222fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222242222442224224422222222222222244222222222222255522222222222fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222442424444422222222222222224442222222222222255222522222222ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222244222555222424222222222222222222224244222222222522225522252222222ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222244445225224222222222222222222222444222222222225522225522252222222fffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222224444425242222222222222222255242222222222222225522255522252222222ffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222224424444544422222222222222255244422222222222222552225552252222222ffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222444444544444422222222222552442422222422222225252225552252222222fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222442224522222244222222222252442242222422222222525225552225222222fffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222224444444544444442222222222524242242424222222222525225552225222222ffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222242222224524422222222222225222424442242222222222525255552225222222fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222422222444454444422222222225522242242242222222222555225555222522222fffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222224444442222254224222222222255222422242422222222225255225525225222222ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222225444422222222255222242242422222222222525525252522522222ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff5555552225555222222222222222222222225222424222222525222422244222222222222555525552525222222fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff2222225555225552222222222222222222225222242422222525222242244222222222222525252552255222222fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff22222222255255255222222222222222222225222242222225225252242442222222222225225255522222222222ffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff2222225222525552225522225555555222222225222242222222225222422422222222222255252222222222222222fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff222222252225222555555555252222225552222552222442222222222222424222222222222525522222222222222222ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff2222222252225222552225552552555222255225252222422222222222524242222222222252222222222222222222222fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff222222222522225225522222222255225222525252552222222222224222542442222222222522222222222222222222222ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff222222222252225225252222222222222552252552252222222222224422254442222222222522222222222222222222222ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff222222222225542525252222222222222225255255255222222222224242224242222222222522222222222222222222222ffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff2222222222222252522552222222222222225252552555222222222224224224522222222222522222222222222222222222ffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff2222222222222225252552222222222222555225255225222222222224222455455522222222222222222222222222222222ffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff222222222222222255555222222222555522222522552522222222222422554242525222222522222222222222222222222222ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff222222222222222222525222222255222222222252222252222222222425222424252522222222222244442222222222222222ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff222222222222222222255222225522242222222252222252222222222425222244225522225222222444422222222222222222ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff222222222222222222225522552222222222222225222252222222222452222242422222252222224442242222222222222222ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222255222222222222222225222252222222222452222224422222224444442222242222222222222222ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff222222222222222222244522222222222222222222522252222222222452222222242225242442222244442222222222222222ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff22222222222224444242254222222222222222222252224444222222245222222222225224422222242242222222222222ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff22222222224442422442255222222222222442222252254222442222245222222222252242222222422422225222222222ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff22222222222222224224224552442222222224422252524222254444455555555224544222222224224222225222222222ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff22222222222222224444444225542222222222245555224222522522555555552225224244444444442222225222222222fff2ffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222444222255555555555524452244422525255225525552252244224444222222222252222222222ff22ffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222244222224222222222222242224442525522222255522522424422242222222222522222222222f2ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff22222222222222242222442222242222222222222542244425252222222522252242244442222222222225222222222222fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222244222224222222222222252422444255222225522252242224222224222222225222222222222ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222224424444222222222222252242425425555555222522422222422242222222252222222222222ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff2242222222222222222222444444422222222222252224244545555222225244222222444422222222552222222222222ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff2224422222222222222222244444444222222222222222424454522222252422222222222222255555552222222222222ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff2224244422222222222222222444424222222222222222244245252225522222222222222225525525522222222222222ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff4224242222222222222222222244422222222222222242442525552222222222222225555552252222222222222222ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff424442222222222222222222222222222222222222224244252222222222222222255555222222222222222222222ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff244244222222222222222222222222222222222222222442445222222222222225555522222222222222222222222ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff224224442222222222222222222242222222222222222244222522222222222255552222222222224422222222222ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff224224225552222222222222222222555552222222222242422252222222222222222222222222442222222222222ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff22442242245522222222222222255522222555222222222442222522222222222222222222224422222222222222fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff2224422422245522222222222225222222222255555222224422225222222222222222222244222224222222222ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff22244224225555552222222222522222222222225552222442222522222222222222222442222444222222222fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff2222442242255522555222222225222222222222255522224422225222222222222222422224442222222222ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff222222442422555522255522222252222222222225255222442222252222222222222422224422222222222fffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff222222444242255522222255222225225552222225225522244222252222222222444242442222222222222fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2222222444422255222222255222255555555222522252222242222522222222424422222222222222222ffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2222222244444445522222222555522255522552522252222222222522222422442222222222222222222ffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2222222224244442555552222222252222255555522225222222222252444424222222222222222222222ffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222444424422555552222222222225524455444544444444445444442222222222222222222222ffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222244422444452252222222222222522225525222222442252222222222222222222222222ffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222244422242455522222222222222522222555222222222252222222222222222222222ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222224442244442222222222222222552222255222222222522222222222222222222ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222444442222222222222222222252222255222222225222222222222222222ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222444442222222222222222222522222555222222522222222222222222fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222552225225522252222222222222222fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222552522225225222222222222222ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222255522225552222222222222ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222552222222222222222fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
let mySprite = sprites.create(img`
    2 2 2 2 2 . . . . . . . . . . . 
    2 8 8 8 2 2 2 . . . . . . . . . 
    2 8 8 8 8 8 2 2 2 2 . . . . . . 
    2 8 8 8 8 8 8 8 2 2 2 2 . . . . 
    2 8 8 8 8 8 8 8 8 8 8 8 2 2 . . 
    2 8 8 8 8 8 8 8 8 8 8 8 b b . . 
    2 8 8 8 8 8 8 8 8 8 8 8 2 2 . . 
    2 8 8 8 8 8 8 8 8 8 8 2 2 . . . 
    2 8 8 8 8 8 8 8 8 8 2 2 . . . . 
    2 2 2 2 2 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scroller.scrollBackgroundWithSpeed(-50, 0)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(4)
forever(function () {
    Star = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 . . 5 5 5 5 . . . . 
        . . 5 5 5 . . . . 5 5 5 . . . . 
        . 5 5 5 . . . . . . 5 5 . . . . 
        `, -50, 0)
    Star.y = randint(5, 155)
    pause(1000)
})
forever(function () {
    Rotten_stars = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . 5 5 4 4 . . . . . . . 
        . . . . . 5 4 4 5 . . . . . . . 
        . . . . 5 5 4 4 5 5 . . . . . . 
        . . . . 5 4 4 4 5 5 . . . . . . 
        5 7 5 5 5 5 2 5 5 2 5 5 5 5 5 . 
        5 5 2 2 6 5 2 2 5 2 2 2 2 2 . . 
        . 5 5 5 6 5 2 2 5 5 5 2 2 . . . 
        . . . 5 6 6 2 5 5 4 5 . . . . . 
        . . . 5 6 5 5 3 3 4 5 . . . . . 
        . . . 5 6 5 3 5 5 4 5 . . . . . 
        . . . 4 4 4 . . 5 4 4 5 . . . . 
        . . 5 4 5 . . . . 5 4 5 . . . . 
        . 5 5 5 . . . . . . 5 5 . . . . 
        `, SpriteKind.Enemy)
    Rotten_stars.setPosition(160, randint(0, 155))
    Rotten_stars.setVelocity(-50, 0)
    pause(4000)
})
