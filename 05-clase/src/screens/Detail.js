import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(props){
        super(props)
    }
  render() {
    let id = this.props.match.params.id
    return (
      <div>Detail of {id}</div>
    )
  }
}
