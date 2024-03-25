import React from 'react'

function RMCard(props) {
  return (
    <div>
        <img src={props.milanesa.image} />
        <h3>
        {props.milanesa.name}
        </h3>
    </div>
  )
}

export default RMCard
