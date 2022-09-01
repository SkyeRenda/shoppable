import React from "react";
import { ItemModel } from "../models/itemModel";
import Item from "./Item";
import "../styling/itemList.css";

interface ItemListProps {
  items: ItemModel[];
  toggleBought: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  toggleBought,
}: ItemListProps) => {
  return (
    <>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          toggleBought={toggleBought}
        ></Item>
      ))}
    </>
  );
};

export default ItemList;
