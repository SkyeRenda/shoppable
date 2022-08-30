import React from "react";
import { ItemModel } from "../models/itemModel";

export interface ItemProps {
  item: ItemModel;
  toggleBought: (id: string) => void;
}

const Item: React.FC<ItemProps> = ({ item, toggleBought }: ItemProps) => {
  function handleBoughtClick() {
    toggleBought(item.id);
  }
  console.log(item.name);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={item.bought}
          onChange={handleBoughtClick}
        />
        {item.name}
      </label>
    </div>
  );
};

export default Item;
