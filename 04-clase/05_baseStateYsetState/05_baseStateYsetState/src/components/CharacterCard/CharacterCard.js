import React, {Component} from 'react'
import './styles.css'

class CharacterCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      contenidoOculto: true,
      botonTexto: 'Mostrar contenido'
    }
  }

  ocultarYMostrarContenido(){
    if(this.state.contenidoOculto === true){
      this.setState({
        contenidoOculto:false,
        botonTexto:'Ocultar contenido'
      })
    } else {
      this.setState({
        contenidoOculto:true,
        botonTexto:'Mostrar contenido'
      })
    }
  }

  render(){
    return (
      <div className='card-heros'>
        <img src={`/img/characters/${this.props.data.img}`} />
        <h3>{this.props.data.name}</h3>
                <p>{this.props.data.description}</p>
          {     
            this.state.contenidoOculto ?
            '' 
            :       
              <p>{this.props.data.extra}</p>
          }        
        <button onClick={()=> this.ocultarYMostrarContenido()}>{this.state.botonTexto}</button>
      </div>
    )
  }
}

export default CharacterCard
