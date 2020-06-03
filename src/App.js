import React, { Component } from 'react'
import './App.css';

import Person from './Person/Person'


 class App extends Component {
  state = {
    persons: [
      { name: 'Ezequiel', age: 22},
      { name: 'Eduardo', age: 25},
      { name: 'Kenny', age: 72}
    ],
    otherState:'some other value'
  }

  //função para mudar os nomes
  switchNameHandler = () =>{
    this.setState( {
      persons: [
        {name: 'Maximilian', age: 29},
        {name: 'Jubileu', age: 26},
        {name: 'Nicotina', age: 21}
      ]
    })

  }

  render(){
    return(
      <div className="App">
        <h1>Olá, sou um App React!</h1>
        <p>Esta realmente funcionando</p>
        <button onClick={this.switchNameHandler}>Mudar de Nome</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }

}

export default App