import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <div>
            <strong>MainLayout</strong>
            <main style={{ border: "1px solid red", padding: "1rem" }}>
                <Outlet />
            </main>
        </div>
    )
}