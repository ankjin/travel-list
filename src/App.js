import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
]

export default function App() {
  const [items, setItems] = useState([])

  function handleAddItem(item) {
    setItems(items => [...items, item])
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackagingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🐱‍💻 Far Away 🐱‍🏍</h1>
}

function Form({onAddItem}) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)
  

  function handleFormSubmit(e) {
    e.preventDefault()

    if(!description) return

    const newItem = {
      description, quantity, packed: false, id: Date.now()
    }
    onAddItem(newItem)   

    console.log(newItem)
    
    setDescription("")
    setQuantity(1)
  }



  return (
  <form className="add-form" onSubmit={handleFormSubmit}>
    <h3>What do you need for your 😎 trip?</h3>
    <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
      {
        Array.from({ length:20 }, (_, i) => i + 1)
        .map(num => 
          <option value={num} key={num}>
            {num}
          </option>
        )
      }
    </select>
    <input type="text" placeholder="item" value={description} onChange={(e) => setDescription(e.target.value)} />
    <button>Add</button>
  </form>
  )
}

function PackagingList({items}) {
  return (
  <div className="list">
    <ul>
      {
        items.map(item => <Item key={item.id} item={item} />)
      }
    </ul>
  </div>
  );
}

function Item({item}) {
  return (
  <li>
    <span style={item.packed ? {textDecoration:"line-through"}: {}}>
      {item.quantity} {item.description}
    </span>
    <button>😡</button>
  </li>
  )
}

function Stats() {
  return <footer className="stats">
    <em>🐠You have X items on your list, and you already packed X</em>
  </footer>
}