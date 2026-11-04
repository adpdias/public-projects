import { useContext } from "react";
import { ThemeContext } from "../App";

export const Card = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ width : 400, height : 400, background : theme == 'light' ? 'white' : 'black' }}>
            
        </div>
    )
}