import { useState } from 'react'
import './App.css'
import FoodItem from './components/FoodItem.jsx'
import Navbar from './components/Navbar.jsx';
import AddItemForm from './components/AddItemForm.jsx';
import SummaryStats from './components/SummaryStats.jsx';
import { calculateDaysRemaining } from './utils/dateUtils.js';

function App() {
  //veränderbare Liste zum testen
  const [inventory, setInventory ] = useState([
    { id: 1, name: "Milch", quantity: 1, unit: "Liter", expiryDate: "2026-01-15" },
    { id: 2, name: "Eier", quantity: 6, unit: "Stk", expiryDate: "2026-01-23" },
    { id: 3, name: "Hühnerbrustfilet", quantity: 400, unit: "g", expiryDate: "2026-01-25" },
    { id: 4, name: "Spinat", quantity: 500, unit: "g", expiryDate: "2026-03-20" }
  ]);

  let inventoryLength = inventory.length;

  const deleteItem = (id) => {
    //Wir erstellen eine Kopie der inventory-liste mit allen items die die zu löschende id nicht hat
    const updatedInventory = inventory.filter(item => item.id ==! id);
    setInventory(updatedInventory);
  };

  //Neues Item ins Inventory hinzufügen
  const addItem = (newItem) => {
    setInventory([newItem, ...inventory]);
  };

  console.log(inventory);

  //Berechnung der Stats für Summary
  const expiredItems = inventory.filter(item => calculateDaysRemaining(item.expiryDate) < 0).length;

  const criticalItems = inventory.filter(item => {
    const days = calculateDaysRemaining(item.expiryDate);
    return days <= 3 && days > 0;
  }).length

  const positiveItems = inventory.filter(item => calculateDaysRemaining(item.expiryDate) > 1).length;

  return (
    <>
    <Navbar inventoryLength={inventoryLength}/>
    <div className='dashboard-container'>
      <SummaryStats expired={expiredItems} critical={criticalItems} positive={positiveItems} />
      <section className='sidebar'>
        <AddItemForm onAddItem={addItem}/>
      </section>
      <section className='inventory-list'>
        {inventory.map((singleItem) => (
          <FoodItem
            key={singleItem.id}
            item={singleItem}
            onDelete={deleteItem}
          />     
        ))}
      </section>
    </div>
    </>
  )
}

export default App
