import React from "react";
import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";
import "./InventoryDisplay.css";

function InventoryDisplay({ inventory, deleteItem }) {
  return (
    <div>
      <h2 className="inventory-title">Inventory</h2>
      {inventory.map((item, index) => (
        <div key={index} className="item-card">
          <ItemCard item={item} />
          <ItemAction itemName={item.name} deleteItem={deleteItem} />
        </div>
      ))}
    </div>
  );
}

export default InventoryDisplay;
