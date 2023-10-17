import React, { useState, useCallback } from 'react';

function ItemList({ items, onItemSelect }) {
   return (
      <ul>
         {items.map((item, index) => (
            <li key={index} onClick={() => onItemSelect(item)}>
               {item}
            </li>
         ))}
      </ul>
   );
}

function App() {
   const [selectedItem, setSelectedItem] = useState(null);
   const handleItemSelect = useCallback((item) => {
      setSelectedItem(item);
   }, []);

   const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape'];

   return (
      <div>
         <h2>Selected Item: {selectedItem || 'None'}</h2>
         <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
   );
}

export default App;
