import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // console.log(this.props.pets)
    return <div className="ui cards"> 
      {/* {this.props.pets.map(data => <Pet pet = {data} />)} */}
      {this.props.pets.map(pet => <Pet {...pet} />)}
    </div>
  }
}

export default PetBrowser


// {props.paintings.map(painting => <PaintingCard painting={painting} />)}