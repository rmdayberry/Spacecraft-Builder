import React from "react";
import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

function InventoryDisplay({ inventory, deleteItem }) {
  return (
    <div>
      <h2>Inventory</h2>
      {inventory.map((item, index) => (
        <div key={index}>
          <ItemCard item={item} />
          <ItemAction deleteItem={() => deleteItem(item.name)} />
        </div>
      ))}
    </div>
  );
}

export default InventoryDisplay;
