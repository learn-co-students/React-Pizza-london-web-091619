import React from "react";

const PizzaForm = ({
  editPizza,
  updateForm,
  updateVegetarian,
  submitPizza
}) => {
  const { topping, size, vegetarian } = editPizza;
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          id="topping"
          onChange={updateForm}
          className="form-control"
          placeholder="Pizza Topping"
          value={topping}
        />
      </div>
      <div className="col">
        <select
          value={size}
          id="size"
          className="form-control"
          onChange={updateForm}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            id="vegetarian"
            type="radio"
            value="Vegetarian"
            checked={vegetarian}
            onChange={() => updateVegetarian(vegetarian)}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="vegetarian"
            value="Not Vegetarian"
            checked={!vegetarian}
            onChange={() => updateVegetarian(vegetarian)}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={submitPizza}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
