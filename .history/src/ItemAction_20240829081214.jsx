import React from "react";

function ItemAction({ deleteItem }) {
  return <button onClick={deleteItem}>Delete Item</button>;
}

export default ItemAction;
