import { useState } from 'react'
import './App.css'
import FoodItem from './components/FoodItem.jsx'
import Navbar from './components/Navbar.jsx';

function App() {
  //veränderbare Liste zum testen
  const [inventory, setInventory ] = useState([
    { id: 1, name: "Milch", quantity: 1, unit: "Liter", expiryDate: "2026-01-15" },
    { id: 2, name: "Eier", quantity: 6, unit: "Stück", expiryDate: "2026-02-10" },
    { id: 3, name: "Spinat", quantity: 500, unit: "Gramm", expiryDate: "2026-01-20" }
  ]);

  const deleteItem = (id) => {
    //Wir erstellen eine Kopie der inventory-liste mit allen items die die zu löschende id nicht hat
    const updatedInventory = inventory.filter(item => item.id ==! id);
    setInventory(updatedInventory);
  };

  return (
    <>
    <Navbar/>
    <div>
      {inventory.map((singleItem) => (
        <FoodItem
          key={singleItem.id}
          item={singleItem}
          onDelete={deleteItem}
        />     
      ))}
    </div>
    </>
  )
}

export default App
