import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (e) => {

    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }
  
  onFindPetsClick = () => {
  
  }
 
  fillList = () => {
    let currentType =""
    if(this.state.filters.type==='all'){
      currentType = ''
    }else if(this.state.filters.type==='dog'){
      currentType = '?type=dog'
    }else if(this.state.filters.type==='cat'){
      currentType = '?type=cat'
    }else if(this.state.filters.type==='micropig'){
      currentType = '?type=micropig'
    }

    fetch(`/api/pets${currentType}`)
    .then (res => res.json())
    .then (data => {
      this.setState({
        pets: data
      })
      console.log(this.state.pets)
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          {/* {this.fillList()} */}
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeType={this.changeType} fillList={this.fillList}/>
            </div>
            <div className="twelve wide column">
              {/* {console.log(this.state.pets)} */}
              <PetBrowser pets={this.state.pets}/>
            </div>
           
          </div>
        </div>
      </div>
    )
  }
}


export default App

