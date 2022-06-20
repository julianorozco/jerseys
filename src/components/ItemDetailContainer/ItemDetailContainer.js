import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(db, "products", productId)).then((response) => {
      const item = { id: response.id, ...response.data() };
      setItem(item);
    });
  }, [productId]);

  return (
    <div className="container">
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <ItemDetail {...item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
