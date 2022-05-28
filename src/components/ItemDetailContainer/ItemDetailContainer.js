import ItemDetail from "../ItemDetail/ItemDetail";
import { getItem } from "../../asyncmock";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem().then((response) => {
      setItem(response);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <ItemDetail item={item} />
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
