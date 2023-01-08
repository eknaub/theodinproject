import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {}
  });
  const params = useParams();

  const fetchItem = async () => {
    const data = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${params.id}`);
    const item = await data.json();

    setItem(item.data);
  }
  
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.icon} alt=""/>
    </div>
  )
}

export default ItemDetail;