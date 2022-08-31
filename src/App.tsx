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
  const undoList: Array<ItemModel[]> = [];

  function handleAddItem() {
    const name =
      itemNameRef.current?.value !== undefined
        ? itemNameRef.current?.value
        : " ";
    if (name === "") {
      return;
    }
    const newItemList = [...items, { id: uuidv4(), name: name, bought: false }];
    undoList.push([...items]);
    setItems(newItemList);

    if (itemNameRef.current?.value) {
      itemNameRef.current.value = "";
    }
  }

  function toggleBought(id: string) {
    const newItems = [...items];
    const item = newItems.find((item) => item.id === id);
    undoList.push([...items]);
    if (item !== undefined) {
      item.bought = !item.bought;
    }
    setItems(newItems);
  }

  function handleClearBought() {
    const newItems = items.filter((items) => !items.bought);
    undoList.push([...items]);
    setItems(newItems);
  }

  return (
    <div className="App">
      <h1>HELLO LEYLA</h1>

      <input ref={itemNameRef}></input>
      <Button
        variant="contained"
        onClick={handleAddItem}
      >
        Add Item
      </Button>
      <ItemList
        items={items}
        toggleBought={toggleBought}
      ></ItemList>
      <Button
        variant="contained"
        onClick={handleClearBought}
      >
        {" "}
        Clear Bought Items
      </Button>
    </div>
  );
}

export default App;
