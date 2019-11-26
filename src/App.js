import React, { useState, useEffect, Fragment } from "react"
import Header from "./components/Header"
import PizzaForm from "./components/PizzaForm"
import PizzaList from "./containers/PizzaList"

const pizzasURL = "http://localhost:3000/pizzas/"

const App = () => {
  const [pizzas, setPizzas] = useState([])
  const [pizzaIdToEdit, setPizzaIdToEdit] = useState(null)
  const [pizzaFormInputs, setPizzaFormInputs] = useState({})

  useEffect(() => {
    fetch(pizzasURL)
      .then(res => res.json())
      .then(json => setPizzas(json))
  }, [])

  const initPizzaEdit = ({ id, topping, size, vegetarian }) => {
    setPizzaIdToEdit(id)
    setPizzaFormInputs({
      topping: topping,
      size: size,
      vegetarian: vegetarian
    })
  }

  const handleChange = e => {
    const name = e.target.name
    let value = e.target.value
    name === "vegetarian" && (value = (value === "true"))

    setPizzaFormInputs((prevState) => (
      { ...prevState, [name]: value }
    ))
  }

  const updatePizza = (pizza) => {
    setPizzas(prevPizzas => prevPizzas.filter(prevPizza => prevPizza.id !== pizza.id))
    setPizzas(prevPizzas => [...prevPizzas, pizza])
  }

  const submitPizzaEdit = e => {
    if (!pizzaIdToEdit) return;

    fetch(pizzasURL + pizzaIdToEdit, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(pizzaFormInputs)
    }).then(res => res.json())
      .then(json => updatePizza(json))
  }

  return (
    <Fragment>
      <Header />
      <PizzaForm
        {...pizzaFormInputs}
        handleChange={handleChange}
        handleSubmit={submitPizzaEdit}
      />
      <PizzaList pizzas={[...pizzas].sort((a, b) => a.id - b.id)} initPizzaEdit={initPizzaEdit} />
    </Fragment>
  )
}

export default App
