import React, { useState, useEffect } from "react";

const EditItemForm = ({ item, onUpdateItem, onCancelEdit }) => {
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setName(item.name);
    setCategory(item.category);
    setQuantity(item.quantity);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateItem({ ...item, name, category, quantity: Number(quantity) });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-4">
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-1 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancelEdit}
          className="bg-gray-500 text-white px-4 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditItemForm;
