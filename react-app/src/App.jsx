import { useState } from "react";
import "./App.css";
import GroceryRow from "./GroceryRow";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Bread", qty: 2 },
    { id: 2, name: "Milk", qty: 1 },
    { id: 3, name: "Apples", qty: 5 },
  ]);

  const [newItemName, setNewItemName] = useState("");

  function handleAddItem() {
    const trimmed = newItemName.trim();
    if (trimmed === "") return;

    const newItem = { id: Date.now(), name: trimmed, qty: 1 };
    setItems([...items, newItem]);
    setNewItemName("");
  }

  function handleIncrement(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  }

  function handleDecreament(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  }

  function handleRemove(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  const totalQuantity = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="app">
      <h1>🛒 Grocery List</h1>
      <div className="add-row">
        <input
          type="text"
          placeholder="e.g. Oranges"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>

      <ul className="list">
        {items.map((item) => (
          <GroceryRow
            key={item.id}
            item={item}
            onIncrement={handleIncrement}
            onDecrement={handleDecreament}
            onRemove={handleRemove}
          />
        ))}
      </ul>

      <div className="summary">
        <span>Items: {items.length}</span>
        <span>Total quantity: {totalQuantity}</span>
      </div>
    </div>
  );
}
