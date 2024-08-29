import React from "react";
import "./ItemAction.css";

function ItemAction({ itemName, deleteItem }) {
  const handleDelete = () => {
    deleteItem(itemName);
  };
  return (
    <button className="deleteBtn" onClick={handleDelete}>
      Delete Item
    </button>
  );
}

export default ItemAction;
