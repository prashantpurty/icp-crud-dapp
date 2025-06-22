import React, { useState } from 'react';
import { createActor } from "declarations/my_crud_dapp_backend";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const backend = createActor(process.env.BACKEND_CANISTER_ID);

  const handleCreate = async () => {
    const id = Date.now();
    await backend.create_item(id, input);
    setInput('');
    refreshItems();
  };

  const refreshItems = async () => {
    const ids = [...Array(100).keys()]; // Adjust based on expected IDs
    const fetched = await Promise.all(ids.map(id => backend.read_item(id)));
    setItems(fetched.filter(Boolean));
  };

  return (
 <div>
    <input 
      value={input} 
      onChange={(e) => setInput(e.target.value)} 
    />
    <button onClick={handleCreate}>Add</button>
    
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.content}
          <button onClick={() => backend.update_item(item.id, "Updated")}>
            Update
          </button>
          <button onClick={() => backend.delete_item(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}
export default App;
