import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="lead">{product.title}</h4>
          <img src={product.pictureUrl} alt="" />
          <h5 className="lead d-flex justify-content-center align-items-center">
            ${product.price}
          </h5>
          <ItemCount />
        </div>
      </div>
    </>
  );
};
export default Item;
