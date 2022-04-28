import React, { Component } from "react";
import InputBox from "../../components/inputBox";
import List from "../../components/list";
// import stateStorage from "../../utils/stateStorage";
import "./home.css";

class Home extends Component {
  state = {
    value: "",
    items: [
      {
        title: "item 1",
        id: Math.random() * 1000,
        checked: false,
      },
      {
        title: "item 2",
        id: Math.random() * 1000,
        checked: false,
      },
      {
        title: "item 3",
        id: Math.random() * 1000,
        checked: false,
      },
    ],
    checked: false,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
      localStorage.setItem("data", JSON.stringify(this.state));
  };

  handleChecked = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        return {
          ...item,
          checked: item.id === id ? !item.checked : item.checked,
        };
      }),
    });
      localStorage.setItem("data", JSON.stringify(this.state));
  };

  handleAdd = () => {
    this.setState({
      items: [
        {
          title: this.state.value,
          id: Math.random() * 1000,
        },
        ...this.state.items,
      ],
      value: "",
    });
      localStorage.setItem("data", JSON.stringify(this.state));
  };

  handleDelete = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
      localStorage.setItem("data", JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>to do list</h1>
          <div className="app">
            <InputBox
              value={this.state.value}
              handleChange={this.handleChange}
              handleAdd={this.handleAdd}
            />
            <div className="list">
              <List
                handleChecked={this.handleChecked}
                items={this.state.items}
                handleDelete={this.handleDelete}
                checked={this.state.checked}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
