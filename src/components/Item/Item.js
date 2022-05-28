import { Link } from "react-router-dom";

const Item = ({id,product}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="lead">{product.title}</h4>
          <img src={product.pictureUrl} alt="" />
          <h5 className="lead d-flex justify-content-center align-items-center">
            $&nbsp;{product.price}
          </h5>
          <div className="d-flex justify-content-center align-items-center">
            <Link to={`/detail/${id}`} className="btn btn-dark">
              Ver detalle
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
