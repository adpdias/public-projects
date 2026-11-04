import { useEffect } from "react";
import { useAuth } from "./hooks/auth";
import { useTheme } from "./hooks/theme";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/lightTheme";
import { darkTheme } from "./themes/darkTheme";
import { MainRoutes } from "./routes";

export const App = () => {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitTheme, theme } = useTheme();

  useEffect(() => {
    //Authenticate use using token saved in local storage
    handleAuthenticateUser();

    //Aplly theme saved by user to local storage
    handleInitTheme();
  }, []);

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <MainRoutes />
    </ThemeProvider>
  );
}