import React from "react";
import { calculateDaysRemaining } from "../utils/dateUtils"

const FoodItem = ({ item, onDelete}) => {

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
            <p className="item-count">{item.quantity} {item.unit}</p>
          </div>
        </div>
        <div className="item-status">
          <span className="tag" style={dynamicStyle}>{statusText}</span>
          <p className="status-date">{remainingDays}</p>
          <button 
            className="delete-item-btn" 
            onClick={() => onDelete(item.id)}
            title="Artikel löschen"
            style={{
              background: 'none',
              border: 'none',
              color: '#ef4444',
              cursor: 'pointer',
              marginLeft: '10px'
            }}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div> 
    </>
  )
};

export default FoodItem;