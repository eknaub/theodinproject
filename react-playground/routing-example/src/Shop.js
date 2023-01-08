import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/new");
    const items = await data.json();
    
    setItems(items.data.items);
  }

  return (
    <div>
      {items.map(item => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  )
}

export default Shop;