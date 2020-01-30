import React, { Component } from 'react';

class ThingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thing: ''
    }
    this.thingChange = this.thingChange.bind(this)
    this.thingSubmit = this.thingSubmit.bind(this)
  }

  thingChange(event) {
    const value = event.target.value
    this.setState({
      thing: value
    });
  }

  thingSubmit(event) {
    event.preventDefault()

    this.props.submit(event)
    this.setState({
      thing: ''
    })
  }

  thingList(props) {
    return <li>{props.thing.name}</li>
  }

  render() {
    return (
      <>
        <ul>
          {this.props.list.map(thing => <thingList key={thing.id} thing={thing} />)}
        </ul>
        <form onSubmit={this.thingSubmit}>
          <input
            name="thing"
            type="text"
            value={this.state.thing}
            onChange={this.thingChange}
          />
          <button>submit</button>
        </form>
      </>
    )
  }
}

export default ThingList