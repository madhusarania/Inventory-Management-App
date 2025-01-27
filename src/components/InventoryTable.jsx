import React, { useState, useEffect } from "react";
import DeleteItem from "./DeleteItem";

const InventoryTable = ({ items, onEdit }) => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const handleDelete = (index) => {
    const updatedItems = filteredItems.filter((_, idx) => idx !== index);
    setFilteredItems(updatedItems);
  };

  const handleFilter = (category) => {
    if (category === "") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => handleFilter("")}
          className="bg-gray-200 text-black px-4 py-2 rounded"
        >
          All
        </button>
        <button
          onClick={() => handleFilter("Electronics")}
          className="bg-gray-200 text-black px-4 py-2 rounded ml-2"
        >
          Electronics
        </button>
        <button
          onClick={() => handleFilter("Furniture")}
          className="bg-gray-200 text-black px-4 py-2 rounded ml-2"
        >
          Furniture
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-4 py-2 text-left">Item Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr
                key={index}
                className={item.quantity < 10 ? "bg-red-200" : ""}
              >
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onEdit(index)}
                    className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <DeleteItem
                    itemName={item.name}
                    onDelete={() => handleDelete(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
