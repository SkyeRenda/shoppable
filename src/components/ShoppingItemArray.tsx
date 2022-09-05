import React from "react";
import { ShoppingItemModel } from "../models/itemModel";
import ShoppingItem from "./ShoppingItem";

interface ItemListProps {
  shoppingItemArray: ShoppingItemModel[];
  toggleShoppingIsBought: (id: string) => void;
  removeShoppingItem: (id: string) => void;
}

const ShoppingItemArray: React.FC<ItemListProps> = ({
  shoppingItemArray,
  toggleShoppingIsBought,
  removeShoppingItem,
}: ItemListProps) => {
  return (
    <>
      {shoppingItemArray.map((shoppingItem) => (
        <ShoppingItem
          key={shoppingItem.id}
          shoppingItem={shoppingItem}
          toggleShoppingIsBought={toggleShoppingIsBought}
          removeShoppingItem={removeShoppingItem}
        ></ShoppingItem>
      ))}
    </>
  );
};

export default ShoppingItemArray;
