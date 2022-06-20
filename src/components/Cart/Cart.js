import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";
import toast from "react-hot-toast";

const Cart = () => {
  const { cart, removeItem, getQuantity, getTotal, clearCart } = useContext(CartContext);
  const quantity = getQuantity();
  const total = getTotal();
  const [data, setData] = useState({
    nombre: "",
    email: "",
    phone: "",
    address: "",
  });
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const createOrder = () => {
    toast.loading("Procesando tu compra", {
      duration: 1000,
    });
    const objOrder = {
      buyer: {
        nombre: data.nombre,
        email: data.email,
        phone: data.phone,
        address: data.address,
      },
      items: cart,
      total: getTotal(),
    };

    const ids = cart.map((prod) => prod.id);
    const batch = writeBatch(db);
    const outOfStock = [];
    const collectionRef = collection(db, "products");

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prodQuantity = cart.find((prod) => prod.id === doc.id)?.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(db, "orders");
          return addDoc(collectionRef, objOrder);
        } else {
          toast.error("No hay stock de uno o mas productos seleccionados");
        }
      })
      .then(({ id }) => {
        batch.commit();
        toast.success(`Compra exitosa! tu numero orden es: ${id}`, {
          duration: 8000,
        });
        clearCart();
      });
  };

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
                      <img src="bag.png" alt="" className="h-25 d-inline-block" />
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
                        <div>
                          <h3 className="fw-bold mt-2 pt-1">Tus datos:</h3>
                          <form className="row">
                            <div className="p-1">
                              <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                            </div>
                            <div className="p-1">
                              <input type="email" placeholder="E-mail" className="form-control" onChange={handleInputChange} name="email"></input>
                            </div>
                            <div className="p-1">
                              <input type="tel" placeholder="Teléfono" className="form-control" onChange={handleInputChange} name="phone"></input>
                            </div>
                            <div className="p-1">
                              <input
                                type="text"
                                placeholder="Dirección de envío"
                                className="form-control"
                                onChange={handleInputChange}
                                name="address"
                              ></input>
                            </div>
                          </form>
                        </div>

                        <h3 className="fw-bold mt-2 pt-1">Resumen:</h3>
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
                        <button type="button" className="btn btn-dark btn-block btn-lg m-1" data-mdb-ripple-color="dark" onClick={createOrder}>
                          Comprar
                        </button>
                        <button onClick={() => clearCart()} className="btn btn-danger btn-block btn-lg m-1" data-mdb-ripple-color="dark">
                          Limpiar
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
