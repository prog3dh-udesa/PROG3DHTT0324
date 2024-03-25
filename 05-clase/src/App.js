import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";

import Characters from "./components/Characters/Characters";
import RMSection from "./components/RMSection/RMSection";

const info = [
  {
      img: 'ahsoka.jpg',
      name: 'Ashoka',
      description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
      extra: 'StarWars',
  }, 
  {
      img: 'anakin.jpg',
      name: 'Anakin',
      description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
      extra: 'StarWars',
  },
  {
      img: 'batman.jpg',
      name: 'Batman',
      description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
      extra: 'DC Comics',
  },
  {
      img: 'hulkSmall.jpg',
      name: 'Hulk',
      description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
      extra: 'Marvel',
  },
  {
      img: 'kyloRen.jpg',
      name: 'Kylo Ren',
      description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
      extra: 'StarWars',
  },       
]; 


function App() {
  let categorias=[
    'Categoria 1',
    'Categoria 2',
    'Categoria 3',
    'Categoria 4',
    'Categoria 5',
    'Categoria 6',
    'Categoria 7',
    'Categoria 8',
    'Categoria 9',
  ];

  let cardData = [];

  let menu = [
    'Home',
    'menú1',
    'menú2',
    'menú3',
  ]


  return (
    <React.Fragment>
      <Navbar elementosMenu={menu}/>
      <h1>My App in React</h1>
      <Button/>
      <main>
      <section className="top-data">
        <Card />
        <Card />
        <Card />
      </section>
      <h2>Categories in database</h2>
      <section className="general-data">
      {
        categorias.map( (unaCategoria, idx) => <Category key={unaCategoria+idx} name={unaCategoria} />)
      }
      </section>
       
      <h2>Personajes de películas</h2>
      
      <Characters info={info} />
      <RMSection />
       
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
