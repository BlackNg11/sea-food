import React from "react";
import sampleFishes from "../sample-fishes";
import base from '../base';

import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

 componentDidMount() {
   const { params } = this.props.match
   // reinstate our localStorage
   const localStorageRef = localStorage.getItem(params.storeId);
   if (localStorageRef) {
     this.setState({
       order: JSON.parse(localStorageRef)
     })
   }
   this.ref = base.syncState(`${params.storeId}/fishes`,{
     context: this,
     state: 'fishes'
   });
 }

 componentDidUpdate(prevProps, prevState) {
   localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
 }


 componentWillUnmount() {
   base.removeBinding(this.ref)
 }


  addFish = fish => {
    // 1) Clone state
    const fishes = { ...this.state.fishes };

    // 2) Add out new fish to the fishes
    fishes[`fish${Date.now()}`] = fish;

    // 3) Set the new fishes state
    this.setState({
      fishes
    });
  };

  updateFish = (key, updateFish) => {
    //Clone state
    const fishes = {...this.state.fishes};

    //Update state
    fishes[key] = updateFish;

    //Set to state
    this.setState({
      fishes
    })
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addToOrder = key => {
    //1. Clone state
    const order = { ...this.state.order };

    //2. Either add to the order,or update the number in our order
    order[key] = order[key] + 1 || 1;

    //3. Call setState to update our state oj
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Sea Food" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order {...this.state}/>
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}

        />
      </div>
    );
  }
}

export default App;
