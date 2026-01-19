const Navbar = ({ inventoryLength }) => {
  
  
  return (
    <>
      <header className="main-header">
        <div className="container header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <span className="material-symbols-outlined">
                kitchen
              </span>
            </div>
            <h2 className="brand-name">SmartFridge</h2>
          </div>
          
          <nav className="main-nav">
            <a className="nav-link active" href="#">Dashboard</a>
            <a className="nav-link" href="#">Bestand</a>
            <a className="nav-link" href="#">Rezepte</a>
            <a className="nav-link" href="#">Einstellungen</a>
          </nav>

          <div className="header-actions">
            <div className="counter">Gesamt: {inventoryLength}</div>
            <div className="icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </div>
            <div className="user-avatar">
              <span className="material-symbols-outlined">account_circle</span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
};

export default Navbar