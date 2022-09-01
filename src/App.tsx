import "./App.css";
import { ItemModel } from "./models/itemModel";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import ItemList from "./modules/ItemList";
import Button from "@mui/material/Button";

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
    if (name === "") {
      return;
    }
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

  function showListLength() {
    console.log(items.length);
  }

  return (
    <div className="App">
      <h1>Welcome to Shoppable!</h1>

      <input ref={itemNameRef}></input>
      <Button
        variant="contained"
        className="Add-Item"
        onClick={handleAddItem}
      >
        Add Item
      </Button>
      {items.length > 1 ? (
        <div className="List">
          <ItemList
            items={items}
            toggleBought={toggleBought}
          ></ItemList>
        </div>
      ) : (
        <div>
          <p>List is empty!</p>
          <p>Please add some items</p>
        </div>
      )}
      <button onClick={handleClearBought}> Clear Bought Items</button>
      <button onClick={showListLength}>Show length</button>
    </div>
  );
}

export default App;
