import React from "react";
import { formatPrice } from '../helpers';

class Fish extends React.Component {

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailale = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}<span>{formatPrice(price)}</span></h3>
        <p>{desc}</p>
        <button disabled={!isAvailale} onClick={() => this.props.addToOrder(this.props.index) }>{isAvailale ? 'Add To Order' : 'Sold Out !'}</button>
      </li>
  )
  }
}

export default Fish;
