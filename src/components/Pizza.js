import React from "react"

const Pizza = ({topping, size, vegetarian, handleClick}) => {
  return(
    <tr onClick={handleClick}>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
