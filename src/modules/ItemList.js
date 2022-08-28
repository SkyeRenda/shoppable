
import Item from './Item'

export default function ItemList({items}){

  return (
      items.map(item => {
        return <Item key = {item.id} checked={item.checked} item = {item}/>
      })
    )
  }

