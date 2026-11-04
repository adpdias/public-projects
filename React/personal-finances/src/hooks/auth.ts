import type { User } from "../@types/Auth";
import { setAuthStatus, setUser, setAuthToken } from "../redux/slice/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { getUser, signIn, signUp } from "../services/requests";

const LOCAL_STORAGE_KEY = import.meta.env.VITE_LOCAL_STORAGE_AUTH_KEY

export const useAuth = () => {
    const dispatch = useAppDispatch();

    const authenticate = (user: User, authToken: string) => {
        dispatch(setUser(user));
        dispatch(setAuthToken(authToken));
        dispatch(setAuthStatus("authenticated"));

        localStorage.setItem(LOCAL_STORAGE_KEY, authToken);
    }

    const handleGetToken = () => localStorage.getItem(LOCAL_STORAGE_KEY);

    const handleAuthenticateUser = async () => {
        const authToken = handleGetToken();

        if (!authToken) {
            dispatch(setAuthStatus("not_authenticated"));
            return;
        }

        const request = await getUser();

        if (!request.data) {
            dispatch(setAuthStatus("not_authenticated"));
            return;
        }

        const { data } = request;
        authenticate(data.user, authToken as string);
    }

    const handleSignIn = async ({ email, password }: { email: string; password: string }) => {
        const request = await signIn( email, password );

        if (request.data) {
            const { data } = request;
            authenticate(data.user, data.authToken);
            return true;
        }

        dispatch(setAuthStatus("not_authenticated"));
        return request.error;
    }

    const handleSignUp = async ({ name, email, password }: { name: string; email: string; password: string }) => {
        const request = await signUp( name, email, password );

        if (request.data) {
            const { data } = request;
            authenticate(data.user, data.authToken);
            return true;
        }

        dispatch(setAuthStatus("not_authenticated"));
        return request.error;
    }

    const handleSignOut = () => {
        dispatch(setUser(null));
        dispatch(setAuthToken(null));
        dispatch(setAuthStatus("not_authenticated"));

        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }

    return {
        handleGetToken,
        handleAuthenticateUser,
        handleSignIn,
        handleSignUp,
        handleSignOut
    }
}