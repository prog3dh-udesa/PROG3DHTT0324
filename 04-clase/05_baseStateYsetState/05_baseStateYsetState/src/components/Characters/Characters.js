import React from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import './styles.css'

function Characters(props){
    return(
        <section className='container--cards'>
            {
                props.info.map((elm) =>
                <CharacterCard data={elm} />
                )
            }
        </section>
    )
}

export default Characters