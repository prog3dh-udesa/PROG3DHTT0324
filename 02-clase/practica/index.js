let arrNums= [1, 5, 7, 12, 89, 23];	

let dobles = arrNums.map( numero => numero * 2)

console.log(dobles)

let numsString = arrNums.map((numero) => numero.toString()) 
console.log(numsString)

let nombres = ['franco', 'martina', 'leonardo', 'jose', 'lucia', 'josefina'];

let mayusculaNombres = nombres.map((nombre)=> nombre[0].toUpperCase() + nombre.slice(1))

console.log(mayusculaNombres)

let personas = [
	{
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
    {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];

let soloNombres = personas.map((persona) => persona.nombre)
console.log(soloNombres)

let matrix = personas.map(
    (persona)=> persona.edad >= 60 ? 
    persona.nombre + ' puede entra a la matrix' : 
    persona.nombre + ' es demasiado peque'
)

console.log(matrix)

let enHtml = personas.map((persona)=> `<h2>${persona.nombre}</h2><p>${persona.edad}</p>`)
console.log(enHtml)

let numerosDos = [66, 3, 2, 5, 26, 101];

let mayoresACinco = numerosDos.filter((numero)=> numero > 5 )
console.log(mayoresACinco)

let numsPares = numerosDos.filter((numero) => numero % 2 === 0)
persona
console.log(numsPares)

let words = ["dog", "wolf", "by", "family", "eaten", "camping"];

let menosDeCincoLetras = words.filter((word)=> word.length < 5)
console.log(menosDeCincoLetras)

let listaPersonas = [{ nombre: "Angelina Jolie", afiliado: true },
{ nombre: "Eric Jones", afiliado: false },
{ nombre: "Paris Hilton", afiliado: true },
{ nombre: "Kayne West", afiliado: false },
{ nombre: "Bob Ziroll", afiliado: true }];

let illuminatis = listaPersonas.filter( persona => persona.afiliado === true)
console.log(illuminatis)

