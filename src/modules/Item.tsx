import React from 'react'

export interface ItemProps{
   id : number;
   name: string;
   bought: boolean;
};

const Item : React.FC<ItemProps> = (item, toggleBought) => {

   function handleBoughtClick(){ 
      toggleBought(item.id);
   };
   console.log(item.name)
    return (
      <div>
         <label>
         <input type='checkbox' checked={item.bought} onChange={handleBoughtClick}/>
         {item.name}
         </label>
         
      </div>
    )
};

export default Item;
  

