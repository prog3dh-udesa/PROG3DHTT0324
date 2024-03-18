import React, {Component} from 'react'
import './styles.css'


class Ficha extends Component {

  constructor(props){
    super(props);
    this.state= {
      isSelected: false,
      hiddenContent: false,
      textBtn: 'Ocultar contenido'
    }
  }
 
  seleccionarFicha(){
    this.setState({
      isSelected:true,
    })
  }

  saludar(nombre){
    alert('Hola ' + nombre)
  }

  ocultarContenido(){
    if(this.state.hiddenContent){
      this.setState({
        hiddenContent:false,
        textBtn:'Ocultar contenido'
      })
    } else {
      this.setState({
        hiddenContent:true,
        textBtn:'Mostrar contenido'
      })
    }
  }

  render(){
    return (
      <article 
        onClick={() => this.seleccionarFicha() } 
        className={`data-detail ${this.state.isSelected ? "selected" : ""}`}
      >
          <div className="card-content">
              <h4>título de ficha</h4>
              <p>datos de ficha</p>
              {/* <button onClick={()=> this.saludar('Andres')} >Saludar</button> */}
              {
              this.state.hiddenContent 
              ?
              ""
              :  
              <div>
                <h3>Soy el contenido secreto</h3>
              </div>
              }
              <button onClick={()=> this.ocultarContenido()}>
              {this.state.textBtn}
              </button>
          </div>
          <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
      </article>
    )
  }
}

export default Ficha
