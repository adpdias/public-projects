import type { ReactNode } from "react";

type Props = {
    children?: ReactNode;
}

export const Card = ({children}: Props) => {
    return (
        <div style={{border: "1px solid red", padding: "1rem", borderRadius: "0.5rem"}}>
            <h2>Card Component</h2>
            <p>This is a simple card component.</p>
            {children}
        </div>
    );
}