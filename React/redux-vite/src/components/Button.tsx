import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export const Button = () => {
  const { theme } = useSelector((state: RootState) => state.theme);

  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch({ type: "theme/setTheme", payload: theme === "light" ? "dark" : "light" });
  }

  return (
    <div>
        O tema é: {theme}
        <button onClick={handleChangeTheme}>Mudar o tema</button>
    </div>
  );
}