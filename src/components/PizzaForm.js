import React from "react"

const PizzaForm = ({topping, size, vegetarian, handleChange, handleSubmit}) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          name="topping"
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={
            topping
          }
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <select name="size" value={size} onChange={handleChange} className="form-control">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            name="vegetarian"
            onChange={handleChange}
            type="radio"
            value={true}
            checked={vegetarian === true}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            name="vegetarian"
            onChange={handleChange}
            type="radio"
            value={false}
            checked={vegetarian === false}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default PizzaForm
