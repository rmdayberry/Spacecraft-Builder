import React from "react";

function ItemCard({ item }) {
  return (
    <div>
      <div className="item-name">{item.name}</div>
      <div className="item-qty">Quantity: {item.qty}</div>
      <div className="item-purpose">Purpose: {item.purpose}</div>
    </div>
  );
}

export default ItemCard;
