import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const { cart, removeItem, getQuantity, getTotal } = useContext(CartContext);
  const quantity = getQuantity();
  const total = getTotal();

  if (quantity === 0) {
    return (
      <>
        <div className="container-fluid  mt-100">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body cart">
                  <div className="col-sm-12 text-center">
                    <span className="display-6">
                      <img
                        src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs="
                        alt=""
                      />
                    </span>
                    <h3 className="lead p-3">El carrito se encuentra vacío</h3>
                    <Link to={`/`}>
                      <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">
                        Ir al listado
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <h1 className="display-5 fw-bolder">Carrito</h1>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-8">
                      {cart.map((prod) => {
                        return (
                          <div key={prod.id}>
                            <div className="p-4 shadow">
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
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                  <h6 className="fs-6">Subtotal: $ {prod.quantity * prod.price}</h6>
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
                        );
                      })}
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Resumen</h3>
                        <hr className="my-4"></hr>
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">{quantity} Camisetas</h5>
                          <h5>$ {total}</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">Envio</h5>
                          <h5>Gratis</h5>
                        </div>
                        <hr className="my-4"></hr>
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total</h5>
                          <h5>$ {total}</h5>
                        </div>
                        <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">
                          Comprar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
