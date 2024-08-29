import React, { useState } from "react";

const ItemForm = ({ addItem }) => {
  const initialState = {
    itemName: "",
    qty: "",
    purpose: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors,setErrors]=useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { itemName, qty, purpose } = formData;

    const newErrors = {};
    if (!itemName) newErrors.itemName = "Item name is required";
    if (!qty) newErrors.qty = "Quantity is required";
    if (!purpose) newErrors.purpose = "Purpose is required";
    if (Object.keys(newErrors).length === 0) {
      addItem({ name: itemName, qty, purpose });
      setFormData(initialState);
    } else {
      setErrors(newErrors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="itemName"
          name="itemName"
          type="text"
          placeholder="Item Name"
          value={formData.itemName}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          id="qty"
          name="qty"
          type="number"
          placeholder="Qty"
          value={formData.qty}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          id="purpose"
          name="purpose"
          type="text"
          placeholder="Purpose"
          value={formData.purpose}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
