import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput.js';

class Restaurant extends Component {

  handleClick = () => {
    this.props.store.dispatch({type: "DELETE_RESTAURANT", id: this.props.restaurant.id})
  };

  render() {
    return (
      <li>
        <p>{this.props.restaurant.text}</p>
        <button onClick={this.handleClick}>Delete</button>
        <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store} />
      </li>
    );
  }
};

export default Restaurant;
