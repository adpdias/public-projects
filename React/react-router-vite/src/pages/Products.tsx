import { useNavigate } from "react-router-dom"

export const Products = () => {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate("/products/categoria/1");
    }

    return (
        <div>
            <strong>Products</strong>
            <button onClick={handleNavigate}>Go to Product 1/2</button>
        </div>
    )
}