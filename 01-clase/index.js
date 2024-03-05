let estudiante = {
    nombre: 'Pepe',
    edad: 17
}

let mensaje = estudiante.edad > 18 
    ? 
    'Es mayor y puede ir a la fiesta' 
    :
    estudiante.nombre === 'pepe' ?
    'Le dieron permiso'
    :
    'A casa nene!'

let valorA = 5
let valorB = 2

let multiplicar = (a, b) => a * b


let multiYSumar = (a, b) => {
    let multiplicacion = a * b
    let sumatoria = multiplicacion + 10
    return sumatoria
} 