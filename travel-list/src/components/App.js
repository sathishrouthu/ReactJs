import "./App.css";
import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";
// const items = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "ToothBrush", quantity: 1, packed: true },
// ];
export default function App() {
  const [items, setItems] = useState([]);
  function addItem(newItem) {
    setItems([...items, newItem]);
  }
  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function packItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm("Are you sure to clear the list ? ");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onPackItem={packItem}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
