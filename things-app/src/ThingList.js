import React from 'react';

class ThingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formThing: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(event) {
    event.preventDefault()
    this.props.onCreated({name:this.state.formThing})
    this.setState({
      formThing: ''
    })
  }

  changeHandler(event) {
    this.setState({
      formThing: event.target.value
    })
  }

  render() {
    return (
      <>
        <ul>
          {this.props.things.map(thing => <ThingItem thing={thing} />)}
        </ul>
        <form onSubmit={this.submitHandler}>
          <input type="text" value={this.state.formThing} onChange={this.changeHandler} />
          <button>submit</button>
        </form>
      </>
    )
  }
}

function ThingItem(props) {
  return <li>{props.thing.name}</li>
}

export default ThingForm