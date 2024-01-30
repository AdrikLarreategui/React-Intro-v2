import React, { Component } from 'react'

export default class Person extends Component {
    render() {
        return (
            <div> 
                <span>Name: {props.name}</span>
                <span>Surname: {props.surname}</span>
                <span>Age: {props.age}</span>
            </div>
        )
    }
}