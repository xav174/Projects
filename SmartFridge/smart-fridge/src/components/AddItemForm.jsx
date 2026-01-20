const AddItemForm = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">
            <span class="material-symbols-outlined">add_circle</span> Neu hinzufügen
          </h4>
        </div>
        <form action="" className="quick-add-form">
          <div className="input-group">
            <label htmlFor="input-item-name">Name des Artikels</label>
            <input type="text" id="input-item-name" placeholder="z.B. Iced Matcha Latte"/>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="input-quantity">Anzahl</label>
              <input type="number" id="input-quantity" value="1" />
            </div>
            <div className="input-group">
              <label htmlFor="input-unit">Einheit</label>
              <select name="input-unit" id="input-unit">
                <option>Stk</option>
                <option>Liter</option>
                <option>g</option>
                <option>kg</option>
              </select>
            </div>
            <button type="submit" className="input-submit-btn">Hinzufügen</button>
            <div className="input-group">
              <label htmlFor="input-expiry">Ablaufdatum</label>
              <input type="date" id="input-expiry"/>
            </div>
          </div>
        </form>
      </div>
    </>
  )
};

export default AddItemForm;