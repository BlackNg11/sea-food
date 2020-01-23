import React from "react";

class EditFishForm extends React.Component {
  handleChange = e => {
    //1.Clone state
    const updateFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };

    //2. Update Fishes
    this.props.updateFish(this.props.index, updateFish);
  };

  render() {
    //console.log(this.props);
    return (
      <div className="fish-edit">
        <input
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
          type="text"
          placeholder="Name"
        />
        <input
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
          type="text"
          placeholder="Price"
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
          type="text"
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
          type="text"
          placeholder="Desc"
        />
        <input
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
          type="text"
          placeholder="Image"
        />

        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove the fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
