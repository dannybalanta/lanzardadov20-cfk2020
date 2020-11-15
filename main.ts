let number = 0
// inicializar los valores en cero
input.onGesture(Gesture.Shake, function () {
    // limpiar pantalla antes de agitar la microbit
    basic.clearScreen()
    // elegir un número aleatorio entre 1 y 6
    number = randint(1, 6)
    if (number == 1) {
        // si el número es 1 mostrar un punto central simulando la cara 1 del dado
        // muestra la cara 1 del dado
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        // pausa de 500 milisegundos
        basic.pause(500)
    } else if (number == 2) {
        // si el número es 2 mostrar los puntos simulando la cara 2 del dado
        // muestra la cara 2 del dado
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
        // pausa de 500 milisegundos
        basic.pause(500)
    } else if (number == 3) {
        // si el número es 3 mostrar los puntos simulando la cara 3 del dado
        // muestra la cara 3 del dado
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
        // pausa de 500 milisegundos
        basic.pause(500)
    } else if (number == 4) {
        // si el número es 4 mostrar los puntos simulando la cara 4 del dado
        // muestra la cara 4 del dado
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        // pausa de 500 milisegundos
        basic.pause(500)
    } else if (number == 5) {
        // si el número es 5 mostrar los puntos simulando la cara 5 del dado
        // muestra la cara 5 del dado
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        // pausa de 500 milisegundos
        basic.pause(500)
    } else {
        // si el número es 6 mostrar los puntos simulando la cara 6 del dado
        // muestra la cara 6 del dado
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
        // pausa de 500 milisegundos
        basic.pause(500)
    }
})
