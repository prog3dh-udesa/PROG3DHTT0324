import React, {Component} from 'react'
import './styles.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            isSelected: false
        }
    }

    selectOrUnselect(valorAAsignar){
        this.setState({
            isSelected: valorAAsignar
        })
    }

    render(){
        return (
            <div 
                className={`animal--container ${this.state.isSelected ? 'selected' : ''}`}
                onClick={()=> {this.selectOrUnselect(!this.state.isSelected)}}
            >
                <h3>{this.props.info.common_name}</h3>
            </div>
        )
    }
}

export default Card