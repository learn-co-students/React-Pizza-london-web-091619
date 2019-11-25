import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

const API = "http://localhost:3000/pizzas";

class App extends Component {
  state = {
    pizzas: [],
    editPizza: {}
  };

  componentDidMount() {
    this.fetchPizzas().then(pizzas => this.setState({ pizzas }));
  }

  fetchPizzas = () => {
    return fetch(API).then(resp => resp.json());
  };

  editPizza = editPizza => {
    this.setState({ editPizza });
  };

  updateForm = e => {
    this.setState({
      editPizza: { ...this.state.editPizza, [e.target.id]: e.target.value }
    });
  };

  updateVegetarian = vegetarian => {
    this.setState({
      editPizza: { ...this.state.editPizza, vegetarian: !vegetarian }
    });
  };

  submitPizza = e => {
    e.preventDefault();
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state.editPizza)
    };
    fetch(API + "/" + this.state.editPizza.id, configObj)
      .then(resp => resp.json())
      .then(pizza =>
        this.setState({
          pizzas: this.state.pizzas.map(oldPizza =>
            pizza.id === oldPizza.id ? pizza : oldPizza
          )
        })
      );
  };

  render() {
    const { pizzas, editPizza } = this.state;
    return (
      <Fragment>
        <Header />
        <PizzaForm
          editPizza={editPizza}
          updateForm={this.updateForm}
          updateVegetarian={this.updateVegetarian}
          submitPizza={this.submitPizza}
        />
        <PizzaList pizzas={pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
