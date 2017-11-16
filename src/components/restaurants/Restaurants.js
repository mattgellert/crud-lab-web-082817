import React, { Component } from 'react';
import Restaurant from './Restaurant.js';

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants.map(rest => {
      return <Restaurant id={rest.id} restaurant={rest} store={this.props.store} />
    });

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
