import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ThingForm from './ThingList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      things: []
    }
    this.add = this.add.bind(this)
  }

  add(thing) {
    // event.preventDefault()
    this.setState({
      things: this.state.things.concat(thing)
    })
  }

  delete(thingToDelete) {
    const newThings = this.state.things.filter(thing => thing.value !== thingToDelete.value);

    this.setState({
      things: newThings
    })
  }

  render() {
    return (
      <div className="App">
        <Header thing-count={this.state.things.length}/>
        <ThingForm things={this.state.things} onCreated={this.add} onDelete={this.delete}/>
        <Footer bye='Bye' />
      </div>
    );
  }
}

export default App;
