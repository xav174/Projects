import { useState } from "react";

const SummaryStats = ({ expired, critical, total }) => {
  
  return (
    <>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <p className="stat-label">
                Gesamtmenge
              </p>
              <h3 className="stat-value">{total}</h3>
            </div>
            <div className="stat-icon positive">
              <span className="material-symbols-outlined icon-bg">inventory_2</span>
            </div>
          </div>
          <div className="stat-footer positive">
            <span className="material-symbols-outlined">trending_up</span> +2 heute
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <p className="stat-label">
                Läuft bald ab
              </p>
              <h3 className="stat-value">{critical}</h3>
            </div>
            <div className="stat-icon warning">
              <span className="material-symbols-outlined icon-bg">warning</span>
            </div>
          </div>
          <div className="stat-footer warning">
            <span className="material-symbols-outlined">schedule</span> Innerhalb von 2 Tagen
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <p className="stat-label">
                Abgelaufen
              </p>
              <h3 className="stat-value">{expired}</h3>
            </div>
            <div className="stat-icon danger">
              <span className="material-symbols-outlined icon-bg">error</span>
            </div>
          </div>
          <div className="stat-footer danger">
            <span className="material-symbols-outlined">delete_forever</span> Handlungsbedarf
          </div>
        </div>

      </div>
    </>
  )
};

export default SummaryStats;