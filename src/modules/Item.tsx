import React from "react";
import { ItemModel } from "../models/itemModel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

export interface ItemProps {
  item: ItemModel;
  toggleBought: (id: string) => void;
  removeItem: (id: string) => void;
}

const Item: React.FC<ItemProps> = ({
  item,
  toggleBought,
  removeItem,
}: ItemProps) => {
  function handleBoughtClick() {
    toggleBought(item.id);
  }

  function handleRemoveClick() {
    removeItem(item.id);
  }

  return (
    <div>
      <label>
        <Checkbox
          checked={item.bought}
          onChange={handleBoughtClick}
        />
        {item.name}
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

export default Item;
