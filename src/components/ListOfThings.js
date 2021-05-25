import React, { useState } from "react";

export default function ListOfThings() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const addItem = () => {
    setItems([...items, { id: items.length, name: itemName }]);
    setItemName("");
  };
  return (
    <>
      <label>
        <input
          name="item"
          type="text"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        />
      </label>
      <button onClick={addItem}>Insertar</button>
      <table>
       <tbody>
          {items.map(item => (
             <tr key={item.id}><td>{item.name}</td></tr>
            )
           )
          }
        </tbody>
      </table>
    </>
  );
}

