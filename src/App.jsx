import React, { useState } from "react";
import InventoryTable from "./components/InventoryTable";
import AddItemForm from "./components/AddItemForm";
import EditItemForm from "./components/EditItemForm";

const App = () => {
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, idx) => idx !== index);
    setItems(updatedItems);
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
    setIsEditing(true);
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = items.map((item, idx) =>
      idx === editingIndex ? updatedItem : item
    );
    setItems(updatedItems);
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingIndex(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Inventory Management</h1>

      {!isEditing ? (
        <AddItemForm onAddItem={handleAddItem} />
      ) : (
        <EditItemForm
          item={items[editingIndex]}
          onUpdateItem={handleUpdateItem}
          onCancelEdit={handleCancelEdit}
        />
      )}

      <InventoryTable
        items={items}
        onEdit={handleEditItem}
        onDelete={handleDeleteItem}
      />
    </div>
  );
};

export default App;
