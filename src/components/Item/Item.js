import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <Link to={`/detail/${product.id}`} className="text-decoration-none">
            <h4 className="lead">{product.title}</h4>
            <img src={product.pictureUrl} alt="" />
            <h5 className="lead d-flex justify-content-center align-items-center">
              $&nbsp;{product.price}
            </h5>
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn btn-dark">Ver detalle</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Item;
