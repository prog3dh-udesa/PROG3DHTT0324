import Header from "./components/Header";
import TiraFichas from "./components/TiraFichas/TiraFichas";
import TiraCategorias from "./components/TiraCategorias/TiraCategorias";
import Footer from "./components/Footer/Footer";

let navegacion = [
  {
    nombre: 'Home',
    link:'/'
  },
  {
    nombre: 'Peliculas',
    link:'/'
  },
  {
    nombre: 'Series',
    link:'/'
  },
  {
    nombre: 'Inversionistas',
    link:'/'
  },
]

function App() {
  return (
    <div>
      <Header
      dataHeader={navegacion}
      />
      <main>
        <h1>My App in React</h1>
        <TiraFichas />
        <h2>Categories in database</h2>
        <TiraCategorias />
      </main>
      <Footer />
    </div>
  );
}

export default App;
