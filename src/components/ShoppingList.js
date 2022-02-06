import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setIsFiltered] = useState("All");

  function handleChange(event){
    // e.target.value will be the value selected by user, use setIsFiltered callback
    setIsFiltered(event.target.value)
  };

    // filter array to only display the items we filter for
    const filteredItemsToDisplay = items.filter((item)=> {
      if(selectedCategory ==="All") return true;
      return item.category === selectedCategory;
    });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select 
        // in on change, invoke the handler function
          onChange={handleChange}
          name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
