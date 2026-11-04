import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <div>
            <strong>404 - Not Found</strong>
            <Link to="/">Go to Home</Link>
        </div>
    )
}