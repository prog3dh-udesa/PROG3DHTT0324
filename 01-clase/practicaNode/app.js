let favoriteSites = [
    'chat.openai.com',
    'instagram.com',
    'facebook.com'
]
console.log(favoriteSites[2])

favoriteSites.pop()
console.log(favoriteSites)

favoriteSites.push('hi5.com')

console.log(favoriteSites)

let persona = {
    name: 'Pepe',
    lastName: 'Grillo',
    age: 18
}

console.log(`Hola soy ${persona.name} ${persona.lastName} y tengo ${persona.age}`)

let cursos = [
    {
        nombre: 'Programacion 1',
        cantAlumnos: 10,
        descripcion: 'Materia favorita de todos',
        cursada:['Lunes', 'Jueves']
    },
    {
        nombre: 'Programacion 2',
        cantAlumnos: 10,
        descripcion: 'Materia favorita de todos',
        cursada:['Lunes', 'Jueves']
    },
    {
        nombre: 'Programacion3',
        cantAlumnos: 10,
        descripcion: 'Materia favorita de todos',
        cursada:['Lunes', 'Jueves']
    },
    {
        nombre: 'Programacion 4',
        cantAlumnos: 10,
        descripcion: 'Materia favorita de todos',
        cursada:['Lunes', 'Jueves']
    },
]

console.log(cursos[2])
console.log(cursos[3].nombre)


