import React from 'react'

export default function Item({item, toggleBought}) {

   function handleBoughtClick(){ 
      toggleBought(item.id)
   }

    return (
    <div>
       <label>
       <input type='checkbox' checked={item.bought} onChange={handleBoughtClick}/>
       {item.name}
       </label>
       
    </div>

    )
  }

