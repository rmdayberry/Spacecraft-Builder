import React from "react";

function ItemCard({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Quantity: {item.qty}</p>
      <p>Purpose: {item.purpose}</p>
    </div>
  );
}

export default ItemCard;
