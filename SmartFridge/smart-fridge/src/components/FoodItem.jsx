import React from "react";

const FoodItem = ({ item, onDelete}) => {

  const calculateDaysRemaining = (expiryDate) => {
    const today = new Date(); //heute
    today.setHours(0, 0, 0, 0); //Setzt die Uhrzeit auf Null damit wir nur die Kalendar Tage vergleichen

    const expiryDate = new Date(expiryDate); //Ablaufdatum
    expiryDate.setHours(0, 0, 0, 0);

    //berechne die Differenz in Millisekunden
    const diffInMs = expiryDate - today;

    //Umrechnung in Tage
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
  };

  const remainingDays = calculateDaysRemaining(item.expiryDate);

  return (
    <>
      <div className="item-card">
        <div className="item-info">
          <div className="item-icon"></div>
          <div>
            <h4 className="item-name">{item.name}</h4>
            <p className="item-count">{item.quantity}</p>
          </div>
        </div>
        <div className="item-status">
          <span class="tag">Abgelaufen</span>
          <p class="status-date">Gestern</p>
        </div>
      </div> 
    </>
  )
};

export default FoodItem;