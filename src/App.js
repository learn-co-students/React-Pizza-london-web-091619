import React, { Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const BASE_URL = `http://localhost:3000`
const PIZZAS_URL = `${BASE_URL}/pizzas`

const App = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetchPizzas()
  }, [])

  const fetchPizzas = () => {
    return fetch(PIZZAS_URL)
      .then(resp => resp.json())
      .then(pizzaData => setPizzas(pizzaData))
  }

  return (
    <Fragment>
      <Header/>
      <PizzaForm/>
      <PizzaList pizzas={pizzas}/>
    </Fragment>
  );

}

export default App;
