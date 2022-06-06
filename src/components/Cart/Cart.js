import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <h1 className="display-5 fw-bolder">Carrito</h1>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2">
                {cart.map((prod) => {
                  return (
                    <div key={prod.id}>
                      <div className="card-body p-0">
                        <div className="row">
                          <div>
                            <div className="p-3 shadow">
                              <div className="row d-flex justify-content-between align-items-center">
                                <Link to={`/detail/${prod.id}`} className="col-md-2 col-lg-2 col-xl-2">
                                  <img src={prod.pictureUrl} alt="" className="w-75 img-thumbnail" />
                                </Link>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                  <h6 className="fs-6">Camiseta: {prod.title}</h6>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                  <button className="btn btn-link px-2">
                                    <i className="fas fa-minus"></i>
                                  </button>
                                  <div>
                                    <h6 className="fs-6">Cantidad: {prod.quantity}</h6>
                                  </div>
                                  <button className="btn btn-link px-2">
                                    <i className="fas fa-plus"></i>
                                  </button>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 className="mb-0 fs-6">Subtotal: $ {prod.price * prod.quantity}</h6>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <a href="#!" className="text-muted">
                                    <i className="fas fa-times"></i>
                                  </a>
                                  <button className="btn btn-dark" onClick={() => removeItem(prod.id)}>
                                    X
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
