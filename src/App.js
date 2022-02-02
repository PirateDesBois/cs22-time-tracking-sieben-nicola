import React from 'react';
import Section from './components/Section';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { etat: "daily" };
    this.changeState = this.changeState.bind(this);
  }
  // changement d'état
  changeState(e){
    this.setState({ etat: e.target.textContent.toLowerCase() })
  }
  render() {
    return (
      <div className="time">
        <Section etat={this.state.etat} changeState={this.changeState}/>
      </div>
    )
  }
}

export default App;
