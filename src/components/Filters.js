import React from 'react'
import PetBrowser from './PetBrowser.js'

class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange= {(e) => this.props.changeType(e)} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick= {() => this.props.fillList()}  className="ui secondary button">Find pets</button>
          
        </div>
      </div>
    )
  }
}
{/* <form onSubmit={(e) => this.props.addPainting(e)}>
<input type='text' placeholder='Painting Title'/>
<input type='text' placeholder='Painting Image URL'/>
<input type='text' placeholder='Artist Name'/>
<input type='submit' value='Add Painting'/>
</form> */}

export default Filters
