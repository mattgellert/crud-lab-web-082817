import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({type: "ADD_RESTAURANT", text: this.state.text});
    this.setState({
      text: ""
    });
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
