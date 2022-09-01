import React from "react";
import { ItemModel } from "../models/itemModel";
import Item from "./Item";

interface ItemListProps {
  items: ItemModel[];
  toggleBought: (id: string) => void;
  removeItem: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  toggleBought,
  removeItem,
}: ItemListProps) => {
  return (
    <>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          toggleBought={toggleBought}
          removeItem={removeItem}
        ></Item>
      ))}
    </>
  );
};

export default ItemList;
