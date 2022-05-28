import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncmock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../asyncmock";

const ItemListContainer = ({ handlePage }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    if (!categoryId) {
      getProducts().then((response) => {
        setProducts(response);
      });
    } else {
      getProductsByCategory(categoryId).then((response) => {
        setProducts(response);
      });
    }
  }, [categoryId]);
  return (
    <>
      <div className="container">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <ItemList products={products} handlePage={handlePage} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
