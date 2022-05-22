import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const increment = () => {
    setCount(count + 1);
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
