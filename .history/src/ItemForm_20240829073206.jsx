import React, {useState} from "react";

function ItemForm({addItem}) {
  const [itemName,setItemName]=useState('');
  const [qty, setQty]=useState('');
  const [purpose, setPurpose]=useState('');
  const [errors, setErrors]=useState({});

  const handleSubmit= (e)=> {
    e.preventDefault();
    const newErrors={};
    if(!itemName) newErrors.itemName = 'Item name is required';
    if(!qty) newErrors.qty = 'Quantity is required';
    if(!purpose) newErrors.purpose = 'Purpose is required';

    

  };

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e)=> setItemName(e.target.value)}
      </div>
    </form>
  )
}