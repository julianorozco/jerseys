import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../asyncmock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();

  const { productId } = useParams();

  useEffect(() => {
    getProductsById(productId).then((response) => {
      setItem(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <ItemDetail item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
