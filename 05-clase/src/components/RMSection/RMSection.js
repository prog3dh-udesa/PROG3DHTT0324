import React, { Component } from 'react'
import RMCard from '../RMCard/RMCard'

class RMSection extends Component {

    constructor(props){
        super(props)
        this.state = {
            personajes:[]
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then((resp)=> resp.json())
        .then((data)=> this.setState({personajes: data.results}))
        .catch((err) => console.log(err))
    }

    render(){
        return(
            this.state.personajes.length > 0 ?
            this.state.personajes.map((elm, idx) => <RMCard milanesa={elm} key={idx + elm.name} /> )
            : 
            <h2>
                Cargando..
            </h2>
        )
    }

}

export default RMSection