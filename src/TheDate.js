import React from 'react';

class TheDate extends React.Component {
//Class extends React.Component with the following changes:
  constructor(props) {
//Constructor takes in props that were generated within React.Component
  super(props)
//super(props) is used to reach into the original 'blueprint' of React.Component class to access functionality defined in the class.
  this.state = { datetime: new Date() };
  console.log('constructor');
//Accesses current datetime and sets the state to it
}
  componentDidMount() {
    console.log('componentDidMount');
//Used here becuase lifecycle of componentDidMount. Was added to the DOM!
    this.interval = setInterval(() => {
      console.log('setInterval');
      this.setState({
        datetime: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
//Cleans up the interval when component is removed from the DOM
    clearInterval(this.interval)
  }
  render() {
    console.log('render');
    return <div>{this.state.datetime.toLocaleString()}</div>
//Renders the state and converts it to a human readable format (string)
  }
}

export default TheDate