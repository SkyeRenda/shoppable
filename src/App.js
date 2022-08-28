import './App.css';
import ItemList from './modules/ItemList';
import fullList  from './itemList.json';
import { useState, useEffect} from 'react';

function App() {
  const [items, setItems] = useState([])
  
  
  console.log(fullList)


  useEffect(() => {
    setItems(fullList)
  }, [])


  return (
    <div className="App">
      <h1>HELLO LEYLA</h1>
      
      <input></input>
      <button>Add Item</button>
      <ItemList items={items}></ItemList>
      <button> Clear Bought Items</button>

    </div>
  );
}

export default App;
