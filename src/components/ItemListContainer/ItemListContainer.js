import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = ({ handlePage }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products");

    getDocs(collectionRef).then((response) => {
      const products = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(products);
    });
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
