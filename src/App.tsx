import "./App.css";
import { ItemModel } from "./models/itemModel";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import ItemList from "./modules/ItemList";

function App() {
  const defaultItems: ItemModel[] = [
    {
      id: uuidv4(),
      name: "milk",
      bought: false,
    },
    {
      id: uuidv4(),
      name: "bread",
      bought: false,
    },
    {
      id: uuidv4(),
      name: "cheese",
      bought: false,
    },
  ];
  const [items, setItems] = useState(defaultItems);
  const itemNameRef = useRef<HTMLInputElement>(null);

  function handleAddItem() {
    const name =
      itemNameRef.current?.value !== undefined
        ? itemNameRef.current?.value
        : " ";
    setItems([...items, { id: uuidv4(), name: name, bought: false }]);
    if (itemNameRef.current?.value) {
      itemNameRef.current.value = "";
    }
  }

  function toggleBought(id: string) {
    const newItems = [...items];
    const item = newItems.find((item) => item.id === id);
    if (item !== undefined) {
      item.bought = !item.bought;
    }
    setItems(newItems);
  }

  function handleClearBought() {
    const newItems = items.filter((items) => !items.bought);
    setItems(newItems);
  }

  return (
    <div className="App">
      <h1>HELLO LEYLA</h1>

      <input ref={itemNameRef}></input>
      <button onClick={handleAddItem}>Add Item</button>
      <ItemList
        items={items}
        toggleBought={toggleBought}
      ></ItemList>
      <button onClick={handleClearBought}> Clear Bought Items</button>
    </div>
  );
}

export default App;
