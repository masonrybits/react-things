import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ThingList from './ThingList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Things: []
    }
    this.add = this.add.bind(this)
  }

  add(event) {
    event.preventDefault()

    let list = this.state.Things
    list.push(event.target.thing.value)

    this.setState({
      Things: list
    })
  }

  render() {
    return (
      <div className="App">
        <Header size={this.state.Things.length} />
        <ThingList values={this.state.IdemList} action={this.addItem} />
        <Footer />
      </div>
    );
  }
}

export default App;
