import React from 'react'



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      astronauts: []
    }
  }


    componentDidMount(){
      fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(astros => {
          this.setState({
            astronauts: astros.people
          })
      })
    }

  render(){
    return(
      <div>
        {this.state.astronauts.map(person => <p>{person.name}</p>)}
      </div>
    )
  }

}

export default App
