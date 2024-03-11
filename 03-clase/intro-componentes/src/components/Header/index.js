import React from "react";
import './styles.css'

function Header(props){
    return(
        <nav>
        <ul className="main-nav">
            {
                props.dataHeader.map((itemHeader, idx)=> <li key={idx + itemHeader.nombre}>{itemHeader.nombre}</li>)
            }
        </ul>
        <ul className="user">
            <li>Nombre usuario <img src="./img/user.jpg" alt="" /></li>
        </ul>
    </nav>
    )
}

export default Header