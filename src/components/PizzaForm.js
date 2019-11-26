import React, { useEffect, useState} from "react"

const PizzaForm = (props) => {
  const [id, setId] = useState()
  const [topping, setTopping] = useState("")
  const [size, setSize] = useState("")
  const [vegetarian, setVegetarian] = useState(true)

  useEffect(() => {
    if (!!props.updatedPizza) {
      setId(props.updatedPizza.id)
      setTopping(props.updatedPizza.topping)
      setSize(props.updatedPizza.size)
      setVegetarian(props.updatedPizza.vegetarian)
    }
  })

  return(
    <div className="form-row" >
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={props.updatedPizza.topping}
          onChange={(event) => setTopping(event.target.value)}/>
      </div>
      <div className="col">
        <select value={size}
                className="form-control"
                onChange={(event) => setSize(event.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div
          className="form-check"
          onChange={() => setVegetarian(!vegetarian)}>
          <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian}/>
          <label className="form-check-label">
            Vegetarian
          </label>
        </div>
        <div
          className="form-check"
          onChange={() => setVegetarian(!vegetarian)}>
          <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!vegetarian}/>
          <label className="form-check-label">
            Not Vegetarian
          </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={() => props.submitPizza(id, topping, size, vegetarian)}>Submit</button>
      </div>
    </div>
  )
}

export default PizzaForm