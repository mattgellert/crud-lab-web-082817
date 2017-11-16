import React, { Component } from 'react';

class Review extends Component {

  handleClick = (e) => {
    this.props.store.dispatch({type: "DELETE_REVIEW", id: this.props.review.id})
  };


  render() {
    return (
      <li>
        <p>{this.props.review.text}</p>
        <button onClick={this.handleClick}>Delete</button>
      </li>
    );
  }
};

export default Review;
