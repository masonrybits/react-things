import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bye: 'Thanks for visiting!',
    };
  }

  render() {
    return (
      <h1>{this.state.bye}</h1>
    )
  }
}

export default Footer