import "./App.css";
import { ShoppingItemModel } from "./models/itemModel";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import ShoppingItemArray from "./components/ShoppingItemArray";
import Button from "@mui/material/Button";
import AddNewItemForm from "./components/AddNewItemForm";

function App() {
  const defaultShoppingItemArray: ShoppingItemModel[] = [
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
  const [shoppingItemArray, setShoppingItemArray] = useState(
    defaultShoppingItemArray
  );
  const shoppingItemNameRef = useRef<HTMLInputElement>(null);
  const userName: string = "Greg!";

  function handleAddShoppingItem() {
    const name =
      shoppingItemNameRef.current?.value !== undefined
        ? shoppingItemNameRef.current?.value
        : " ";
    if (name === "") {
      return;
    }
    const newItemArray = [
      ...shoppingItemArray,
      { id: uuidv4(), name: name, bought: false },
    ];
    setShoppingItemArray(newItemArray);

    if (shoppingItemNameRef.current?.value) {
      shoppingItemNameRef.current.value = "";
    }
  }

  function toggleShoppingIsBought(id: string) {
    const newItems = [...shoppingItemArray];
    const item = newItems.find((item) => item.id === id);
    if (item !== undefined) {
      item.bought = !item.bought;
    }
    setShoppingItemArray(newItems);
  }

  function handleClearBoughtShoppingItems() {
    const newItems = shoppingItemArray.filter((items) => !items.bought);
    setShoppingItemArray(newItems);
  }

  function removeShoppingItem(id: string) {
    const newShoppingItemArray = [...shoppingItemArray];
    const index = newShoppingItemArray.findIndex((shoppingItem) => {
      return shoppingItem.id === id;
    });

    newShoppingItemArray.splice(index, 1);
    console.log(newShoppingItemArray);
    setShoppingItemArray(newShoppingItemArray);
  }

  return (
    <div className="App">
      <h1>Welcome {userName}</h1>
      <AddNewItemForm
        handleAddShoppingItem={handleAddShoppingItem}
        itemNameRef={shoppingItemNameRef}
      />

      {shoppingItemArray.length > 0 ? (
        <ShoppingItemArray
          shoppingItemArray={shoppingItemArray}
          toggleShoppingIsBought={toggleShoppingIsBought}
          removeShoppingItem={removeShoppingItem}
        ></ShoppingItemArray>
      ) : (
        <p>Please add items to the list.</p>
      )}

      <Button
        variant="contained"
        onClick={handleClearBoughtShoppingItems}
      >
        Clear Bought Items
      </Button>
    </div>
  );
}

export default App;
