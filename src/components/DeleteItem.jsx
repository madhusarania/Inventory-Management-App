import React from "react";

const DeleteItem = ({ onDelete, itemName }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${itemName}"?`)) {
      onDelete();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-1 rounded"
    >
      Delete
    </button>
  );
};

export default DeleteItem;
