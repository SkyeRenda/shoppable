import React from "react";
import { ShoppingItemModel } from "../models/itemModel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

export interface ItemProps {
  shoppingItem: ShoppingItemModel;
  toggleShoppingIsBought: (id: string) => void;
  removeShoppingItem: (id: string) => void;
}

const ShoppingItem: React.FC<ItemProps> = ({
  shoppingItem,
  toggleShoppingIsBought,
  removeShoppingItem,
}: ItemProps) => {
  function handleBoughtClick() {
    toggleShoppingIsBought(shoppingItem.id);
  }

  function handleRemoveClick() {
    removeShoppingItem(shoppingItem.id);
  }

  return (
    <div>
      <label>
        <Checkbox
          checked={shoppingItem.bought}
          onChange={handleBoughtClick}
        />
        {shoppingItem.name}
      </label>
      <Button
        variant="text"
        onClick={handleRemoveClick}
      >
        X
      </Button>
    </div>
  );
};

export default ShoppingItem;
