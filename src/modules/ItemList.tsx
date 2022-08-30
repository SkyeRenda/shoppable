
import React from 'react';
import Item, { ItemProps } from './Item'

export interface ItemListProps{
  items: Array<ItemProps>;
};

const ItemList : React.FC<ItemListProps> = (items, toggleBought) => {
  const list = items.items;

  return (
      list.map(item => {
        return <Item key = {item.id} checked={item.checked} item={item} toggleBought={toggleBought}/>
      })
    );
};

export default ItemList;