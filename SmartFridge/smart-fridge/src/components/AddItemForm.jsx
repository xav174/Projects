import { useState } from 'react'
import React from 'react';

const AddItemForm = ({ onAddItem }) => {
  
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    //Neuladen der Seite verhindern
    e.preventDefault(); 

    //Neues Objekt erstellen
    const newItem = {
      id: Date.now(), //Temporäre ID
      name: name,
      quantity: quantity,
      unit: unit,
      expiryDate: date
    };

    onAddItem(newItem); // Daten zu App.jsx hochschicken

    //reset values
    setName('');
    setQuantity(1);
    setUnit('');
    setDate('');
  };



  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">
            <span class="material-symbols-outlined">add_circle</span> Neu hinzufügen
          </h4>
        </div>
        <form onSubmit={handleSubmit} className="quick-add-form">
          <div className="input-group">
            <label htmlFor="input-item-name">Name des Artikels</label>
            <input
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              id="input-item-name" placeholder="z.B. Iced Matcha Latte"/>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="input-quantity">Anzahl</label>
              <input 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                id="input-quantity"/>
            </div>
            <div className="input-group">
              <label htmlFor="input-unit">Einheit</label>
              <select 
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                name="input-unit" 
                id="input-unit">
                <option>Stk</option>
                <option>Liter</option>
                <option>g</option>
                <option>kg</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="input-expiry">Ablaufdatum</label>
              <input 
                type="date"
                value={date} 
                onChange={(e) => setDate(e.target.value)}
                id="input-expiry"/>
            </div>
            <button type="submit" className="input-submit-btn">Hinzufügen</button>
          </div>
        </form>
      </div>
    </>
  )
};

export default AddItemForm;