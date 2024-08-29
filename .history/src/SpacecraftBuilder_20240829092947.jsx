import React, { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";
import "./SpacecraftBuilder.css";

function SpacecraftBuilder() {
  const [inventory, setInventory] = useState([]);

  const addItem = (item) => {
    setInventory((prevInventory) => [...prevInventory, item]);
  };

  const deleteItem = (itemName) => {
    setInventory((prevInventory) =>
      prevInventory.filter((item) => item.name !== itemName)
    );
  };

  return (
    <div>
      <h1>Spacecraft Builder</h1>
      <ItemForm addItem={addItem} />
      <InventoryDisplay inventory={inventory} deleteItem={deleteItem} />
    </div>
  );
}

export default SpacecraftBuilder;
