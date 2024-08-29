import React from "react";

function ItemAction({ itemName, deleteItem }) {
  const handleDelete = () => {
    deleteItem(itemName);
  };
  return <button onClick={handleDelete}>Delete Item</button>;
}

export default ItemAction;
