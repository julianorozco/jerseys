import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > initial) {
      setCount((count) => count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={decrement}
        >
          -
        </button>
        <h3 className="m-3 lead">{count}</h3>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-dark">
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
