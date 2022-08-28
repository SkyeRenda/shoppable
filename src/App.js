import './App.css';
import ItemList from './modules/ItemList';
import fullList  from './itemList.json';
import { useState, useRef, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [items, setItems] = useState([])
  const itemNameRef = useRef()
  useEffect(() => {
    setItems(fullList)
  }, [])

  function handleAddItem(e){
    const name = itemNameRef.current.value
    if (name === '') return
    setItems(prevItems => {
      return [...prevItems, {id: uuidv4(), name: name, bought: false} ]
    })
    itemNameRef.current.value=null
  }
  function toggleBought(id){
    const newItems = [...items]
    const item = newItems.find(item => item.id === id)
    item.bought = !item.bought
    setItems(newItems)
  }

  function handleClearBought(){
    const newItems = items.filter(items => !items.bought)
    setItems(newItems)
  }

  return (
    <div className="App">
      <h1>HELLO LEYLA</h1>
      
      <input ref={itemNameRef}></input>
      <button onClick={handleAddItem}>Add Item</button>
      <ItemList items={items} toggleBought={toggleBought}></ItemList>
      <button onClick={handleClearBought}> Clear Bought Items</button>

    </div>
  );
}

export default App;
