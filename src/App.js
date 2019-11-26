import React, { Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const BASE_URL = `http://localhost:3000`
const PIZZAS_URL = `${BASE_URL}/pizzas`

const App = () => {
  const [pizzas, setPizzas] = useState([])
  const [updatedPizza, setUpdatedPizza] = useState({})

  useEffect(() => {
    fetchPizzas()
  }, [])

  const fetchPizzas = () => {
    return fetch(PIZZAS_URL)
      .then(resp => resp.json())
      .then(pizzaData => setPizzas(pizzaData))
  }

  const submitPizza = (id, topping, size, vegetarian) => {
    if (!!id) {
      patchPizza(id, topping, size, vegetarian)
    } else {
      postPizza(topping, size, vegetarian)
    }
  }

  const postPizza = (topping, size, vegetarian) => {
    return fetch(`${PIZZAS_URL}`, {
      "method": "POST",
      "headers": {
        "Accept": "Application/json",
        "Content-Type": "Application/json"
      },
      "body": JSON.stringify({
        "topping": topping,
        "size": size,
        "vegetarian": vegetarian
      })
    })
    .then(resp => resp.json())
    .then(() => fetchPizzas())
  }

  const patchPizza = (id, topping, size, vegetarian) => {
    return fetch(`${PIZZAS_URL}/${id}`, {
      "method": "PATCH",
      "headers": {
        "Accept": "Application/json",
        "Content-Type": "Application/json"
      },
      "body": JSON.stringify({
        "id": id,
        "topping": topping,
        "size": size,
        "vegetarian": vegetarian
      })
    })
    .then(resp => resp.json())
    .then(() => fetchPizzas())
  }

  const editPizza = (pizza) => {
    setUpdatedPizza(pizza)
  }

  return (
    <Fragment>
      <Header/>
      <PizzaForm
        updatedPizza={updatedPizza}
        submitPizza={submitPizza}/>
      <PizzaList
        pizzas={pizzas}
        editPizza={editPizza}
        />
    </Fragment>
  );

}

export default App;