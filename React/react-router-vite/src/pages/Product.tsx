import { useParams } from "react-router-dom";

export const Product = () => {
  const { categoryId, productId } = useParams();

  return (
    <div>
        <strong>Product</strong>
        <p>Category ID: {categoryId}</p>
        <p>Product ID: {productId}</p>
    </div>
  );
}