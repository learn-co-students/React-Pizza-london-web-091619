import React, { useState, useEffect } from "react"

const Pizza = (props) => {
  const [topping, setTopping] = useState("")
  const [size, setSize] = useState("")
  const [vegetarian, setVegetarian] = useState("")

  useEffect(() => {
    storePizzaState();
  })

  const storePizzaState = () => {
    setTopping(props.pizza.topping)
    setSize(props.pizza.size)
    setVegetarian(props.pizza.vegetarian)
  }

  const handleEditPizza = () => {
    const pizza = {
      "id": props.pizza.id,
      "topping": topping,
      "size": size,
      "vegetarian": vegetarian
    }
    props.editPizza(pizza)
  }

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Vegetarian": "Non-vegetarian"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => handleEditPizza()}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
