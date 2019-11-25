import React from "react";

const Pizza = ({ pizza , editPizza }) => {
  const {topping, size, vegetarian} = pizza
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{`${vegetarian}`}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => editPizza(pizza)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
