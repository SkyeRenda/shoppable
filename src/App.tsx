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
  const user: string = "Greg!";

  function handleAddItem() {
    const name =
      itemNameRef.current?.value !== undefined
        ? itemNameRef.current?.value
        : " ";
    if (name === "") {
      return;
    }
    const newItemList = [...items, { id: uuidv4(), name: name, bought: false }];
    setItems(newItemList);

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

  function removeItem(id: string) {
    const newItems = [...items];
    const index = newItems.findIndex((item) => {
      return item.id === id;
    });

    newItems.splice(index, 1);
    console.log(newItems);
    setItems(newItems);
  }

  return (
    <div className="App">
      <h1>Welcome {user}</h1>

      <input ref={itemNameRef}></input>
      <Button
        variant="contained"
        onClick={handleAddItem}
      >
        Add Item
      </Button>
      {items.length > 0 ? (
        <ItemList
          items={items}
          toggleBought={toggleBought}
          removeItem={removeItem}
        ></ItemList>
      ) : (
        <p>Please add items to the list.</p>
      )}

      <Button
        variant="contained"
        onClick={handleClearBought}
      >
        Clear Bought Items
      </Button>
    </div>
  );
}

export default App;
