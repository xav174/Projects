import { useMemo, useState, useEffect } from 'react'
import './App.css'
import FoodItem from './components/FoodItem.jsx'
import Navbar from './components/Navbar.jsx';
import AddItemForm from './components/AddItemForm.jsx';
import SummaryStats from './components/SummaryStats.jsx';
import { calculateDaysRemaining } from './utils/dateUtils.js';

function App() {
  // 1. State initialisieren: Wir schauen direkt im localStorage nach,
  // bevor wir die Standardwerte setzen.
  const [inventory, setInventory] = useState(() => {
    const savedInventory = localStorage.getItem('myInventory');
    if (savedInventory) {
      // Wenn was gefunden wurde, verwandeln wir den Text zurück in ein JavaScript-Array
      return JSON.parse(savedInventory);
    } else {
      // Wenn nichts gefunden wurde, nehmen wir deine Test-Liste
      return [];
    }
  });

  useEffect(() => {
    // localStorage kann nur Text speichern, daher wandeln wir das Array mit JSON.stringify um
    localStorage.setItem('myInventory', JSON.stringify(inventory));
  }, [inventory]); // Das Array hier sagt: Führe das nur aus, wenn 'inventory' sich ändert  

  let inventoryLength = inventory.length;

  const deleteItem = (id) => {
    //Wir erstellen eine Kopie der inventory-liste mit allen items die die zu löschende id nicht hat
    const updatedInventory = inventory.filter(item => item.id !== id);
    setInventory(updatedInventory);
  };

  //Neues Item ins Inventory hinzufügen
  const addItem = (newItem) => {
    setInventory([newItem, ...inventory]);
  };

  console.log(inventory);

  //Berechnung der Stats für Summary

  const stats = useMemo(() => {
    console.log('Statistike werden berechnet');
    
    const expiredItems = inventory.filter(item => calculateDaysRemaining(item.expiryDate) < 0).length;
    
    const criticalItems = inventory.filter(item => {
      const days = calculateDaysRemaining(item.expiryDate);
      return days <= 3 && days > 0;
    }).length

    const totalItems = inventoryLength;

    return {
      totalItems: totalItems,
      expiredItems: expiredItems,
      criticalItems: criticalItems
    }
  },[inventory]);


  return (
    <>
    <Navbar inventoryLength={inventoryLength}/>
    <div className='dashboard-container'>
      <SummaryStats expired={stats.expiredItems} critical={stats.criticalItems} total={stats.totalItems} />
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
