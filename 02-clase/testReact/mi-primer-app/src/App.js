import Saludo from "./components/Saludo";
import './app.css'

function App() {
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
  let estudiantesNegocios = students.filter((estudiante)=> estudiante.career === 'Negocios Digitales' )
  let miHeader = [
    {
      url:'/',
      name:'Home'
    },
    {
      url:'/series',
      name:'Series'
    },
    {
      url:'/peliculas',
      name:'Peliculas'
    },
    {
      url:'/elenco',
      name:'Elenco'
    },
    {
      url:'/',
      name:'Home'
    },
    {
      url:'/series',
      name:'Series'
    },
    {
      url:'/peliculas',
      name:'Peliculas'
    },
    {
      url:'/elenco',
      name:'Elenco'
    }
  ]  

  return (
    <div>
      <header>
        <ul>
          {
            miHeader.map((elm) => <li><a href={elm.url}>{elm.name}</a></li>)
          }
        </ul>
      </header>
      {
        estudiantesNegocios.map((estudiante)=> <p className="textoSaludo" >Hola {estudiante.name} Bienvenida a {estudiante.career}</p>)
      }
    </div>
  );
}

export default App;