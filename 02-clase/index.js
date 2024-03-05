let students =  [
    {
        name: 'Paula Garcia',
        age: 17,
        career: 'Negocios Digitales'
    },
    {
        name: 'Oscar Ramirez',
        age: 22,
        career: 'Negocios Digitales'
    },
    {
        name: 'Natalia Muñoz',
        age: 16,
        career: 'Veterinaria'
    },
    {
        name: 'Facundo Reyes',
        age: 25,
        career: 'Diseño digital'
    },
    {
        name: 'Diego Maradona',
        age: 28,
        career: 'Educación fisica'
    },
    {
        name: 'Bautista Lopez',
        age: 18,
        career: 'Ingenieria Aeronautica'
    },
]

let edadDuplicada = students.map((estudiante) => {
    return estudiante.age * 2
})
// console.log(edadDuplicada)

let mayoresDeEdad = students.filter((estudiante)=>{
    return estudiante.age >= 18 
})
// console.log(mayoresDeEdad)

let estudiantesVeterinaria = students.filter((estudiante)=> {
    return estudiante.career == 'Veterinaria'
})

// console.log(estudiantesVeterinaria)

let profesor = {
    nombre: 'Carlos',
    edad: 24,
    materia: 'Marketing'
}

let {materia} = profesor
console.log(materia)