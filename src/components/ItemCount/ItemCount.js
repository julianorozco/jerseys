import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-outline-dark" onClick={decrement}>
          -
        </button>
        <h3 className="m-3 lead">{quantity}</h3>
        <button type="button" className="btn btn-outline-dark" onClick={increment}>
          +
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            onAdd(quantity);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
