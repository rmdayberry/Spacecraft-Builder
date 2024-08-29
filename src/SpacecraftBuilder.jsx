import React, { useState } from "react";

function SpacecraftBuilder() {
  const [inventory, setInventory] = useState([]);

  const addItem = (item) => {
    setInventory((prevInventory) => [...inventory, item]);
  };

  const deleteItem = (itemName) => {
    setInventory((prevInventory) =>
      prevInventory.filter((item) => item.name !== itemName)
    );
  };

  return (
    <div>
      <h1>Spacecraft Builder</h1>
    </div>
  );
}

export default SpacecraftBuilder;
