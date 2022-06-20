import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <>
      <Link to={`/detail/${product.id}`} className="text-decoration-none lead">
        <div className="card m-3">
          <div className="card-body">
            <h2 className="lead d-flex justify-content-center align-items-center">{product.title}</h2>
            <img src={product.pictureUrl} alt="" className="shadow mb-4 bg-white rounded" />
            <h3 className="lead d-flex justify-content-center align-items-center">$&nbsp;{product.price}</h3>
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn btn-dark">Ver detalle</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Item;
