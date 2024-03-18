import React from "react";
import Ficha from "../Ficha/Ficha";
import './styles.css'

function TiraFichas(){
    return(
        <section className="top-data">
            <Ficha />
            <Ficha />
            <Ficha />
        </section>
    )
}

export default TiraFichas