import React, { Component, useState, useEffect } from 'react';
import Pizza from '../components/Pizza'

const PizzaList = (props) => {

  useEffect(() => {
    renderPizzas();
  }, [])
  
  const renderPizzas = () => {
    return props.pizzas.map(pizza => {
      return <Pizza pizza={pizza} />
    })
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          renderPizzas()
        }
      </tbody>
    </table>
  );

}

export default PizzaList;