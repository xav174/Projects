import React from "react";

const FoodItem = ({ item, onDelete}) => {

  const calculateDaysRemaining = (expiryDate) => {
    const today = new Date(); //heute
    today.setHours(0, 0, 0, 0); //Setzt die Uhrzeit auf Null damit wir nur die Kalendar Tage vergleichen

    const expiry = new Date(expiryDate); //Ablaufdatum
    expiry.setHours(0, 0, 0, 0);

    //berechne die Differenz in Millisekunden
    const diffInMs = expiry - today;

    //Umrechnung in Tage
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
  };

  const remainingDays = calculateDaysRemaining(item.expiryDate);
  console.log(remainingDays);

  let statusColor = '#0fb86f';
  let statusText = `Noch ${remainingDays} Tage haltbar`;

  if (remainingDays <= 0) {
    statusColor = '#ef4444';
    statusText = 'Abgelaufen';
  } else if (remainingDays <= 3) {
    statusColor = 'orange';
    statusText = 'Läuft bald ab';
  }

  const dynamicStyle = {
    color: statusColor
  }

  return (
    <>
      <div className="item-card" style={{borderLeft: `4px solid ${statusColor}`}}>
        <div className="item-info">
          <div className="item-icon">{/* Icons */}</div>
          <div>
            <h4 className="item-name">{item.name}</h4>
            <p className="item-count">{item.quantity}</p>
          </div>
        </div>
        <div className="item-status">
          <span className="tag" style={dynamicStyle}>{statusText}</span>
          <p className="status-date">{remainingDays}</p>
        </div>
      </div> 
    </>
  )
};

export default FoodItem;