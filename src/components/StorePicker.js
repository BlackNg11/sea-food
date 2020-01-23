import React from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  /*bind this
  constructor() {
    super();

    this.goToStore = this.goToStore.bind(this);
  }*/

  myInput = React.createRef();

  goToStore = (e) => {
    //1.Stop the form submitting
    e.preventDefault();

    //2.Get the text form the input
    const storeName = this.myInput.current.value;

    //3.Change the page to /store/input-value
    this.props.history.push(`/store/${storeName}`);

  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" ref={this.myInput} defaultValue={getFunName()}/>
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
