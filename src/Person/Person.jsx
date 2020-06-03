
import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p>Eu sou {props.name} e eu tenho {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person
