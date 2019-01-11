import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const MyInput = props => {
  return (
    <div>
      <input className="form-control" ref={props.inputRef} type="text" />
    </div>
  );
};

const FuncCustom = () => {
  let inputRef = null;
  const onClick = () => {
    inputRef.focus();
  };
  return (
    <div>
      <span>My Input Ref :</span>
      <MyInput
        inputRef={input => {
          inputRef = input;
        }}
      />
      <input
        className="form-control"
        ref={input => {
          inputRef = input;
        }}
        type="text"
      />
      <input type="submit" value="submit" onClick={onClick} />
    </div>
  );
};
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onKeyUp = (target, e) => {
    // if(e.keyCode===13){
    //   this.lastName.focus();
    // }
    console.log(e.keyCode); // It will give you the key code of the key pressed
    if (e.keyCode === 13) {
      switch (target) {
        case "firstName":
          this.lastName.focus();
          break;
        case "lastName":
          this.age.focus();
          break;
        case "age":
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
  };
  render() {
    return (
      <div className="App">
        Ref in Functional or stateless component :==>
        <FuncCustom />
        <br />
        <br />
        <div>
          <span>First Name : </span>
          <input
            className="form-control"
            ref={input => {
              this.firstName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "firstName")}
            type="text"
          />
        </div>
        <div>
          <span>Last Name : </span>
          <input
            className="form-control"
            ref={input => {
              this.lastName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "lastName")}
            type="text"
          />
        </div>
        <div>
          <span>Age : </span>
          <input
            className="form-control"
            ref={input => {
              this.age = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "age")}
            type="text"
          />
        </div>
        <div>
          <input
            ref={input => {
              this.submit = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "submit")}
            text="Submit"
            type="submit"
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
