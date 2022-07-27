import React from "react";

const initialState = {
  id: "",
  password: "",
  
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.id]: isCheckbox
        ? event.target.checked
        : event.target.value
    
    });
  };

  validate = () => {
    let idError = "";
    let passwordError = "";
    

    if (!this.state.id) {
        idError = "User id cannot be blank";
    }

    if (!this.state.password) {
        passwordError = "Password cannot be blank";
    }

    if (idError || passwordError) {
      this.setState({passwordError, idError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            id="id"
            placeholder="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.idError}
          </div>
        </div>
        <div>
          <input
            password="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
      
        <button type="submit">Login</button>
      </form>
    );
  }
}