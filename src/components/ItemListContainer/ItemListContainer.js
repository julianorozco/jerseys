import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncmock";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <ItemList products={products} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
