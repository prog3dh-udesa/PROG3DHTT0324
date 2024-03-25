import React, { Component } from 'react'
import CharactersRickCard from '../CharactersRickCard/CharactersRickCard'
import './styles.css'
class CharactersRick extends Component {

    constructor(props){
        super(props)
        this.state = {
            personajes:[],
            page:0
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(resp => resp.json())
        .then( data => {
            console.log(data)
            this.setState({
            personajes: data.results,
            page: this.state.page + 1
        })})
        .catch( err => console.log(err))
    }

    borrarPersonaje(id){
        let personajesFiltrados = this.state.personajes.filter(elm => elm.id !== id)
        this.setState({
            personajes: personajesFiltrados
        })
    }

    traerMasPersonajes(){
        fetch("https://rickandmortyapi.com/api/character?page=" + (this.state.page + 1))
        .then(resp => resp.json())
        .then( data => this.setState({
            page:this.state.page + 1,
            personajes: this.state.personajes.concat(data.results)
        }))
        .catch(err => console.log(err))
    }


  render() {
    return (
        <div>
            <div className='rickContainer'>
                {
                this.state.personajes.length > 0 ?
                    this.state.personajes.map((elm, idx) => <CharactersRickCard 
                    key={idx + elm.name} data={elm} 
                    borrar={(id)=> this.borrarPersonaje(id)}
                    />)
                :
                <h1>Cargando</h1>
                }
            </div>
            <div>
                <button onClick={()=> this.traerMasPersonajes()}>
                    Mas personajes
                </button>
            </div>
        </div>
    )
  }
}
export default CharactersRick
