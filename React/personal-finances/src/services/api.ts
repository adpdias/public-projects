import axios, { AxiosError } from 'axios';
import { store } from '../redux/store';
import { setUser, setAuthToken, setAuthStatus } from '../redux/slice/authSlice';

type Props = {
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: object;
    withAuth?: boolean;
};

const LOCAL_STORAGE_KEY = import.meta.env.VITE_LOCAL_STORAGE_AUTH_KEY;

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Global response interceptor: if a request returns 401, clear token and update auth state
instance.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            try {
                localStorage.removeItem(LOCAL_STORAGE_KEY);
                store.dispatch(setUser(null));
                store.dispatch(setAuthToken(null));
                store.dispatch(setAuthStatus('not_authenticated'));
            } catch (_) {
                // swallow errors during cleanup
            }
        }

        return Promise.reject(error);
    }
);

export const api = async <TypeResponse>({ 
    endpoint, 
    method = 'GET', 
    data, 
    withAuth = true 
}: Props) => {
    // attach auth header per-request to ensure latest token is used
    if (withAuth) {
        const token = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (token) {
            instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            // ensure header not leaked when no token
            delete instance.defaults.headers.common['Authorization'];
        }
    }

    try {
        const resquest = await instance.request<TypeResponse>({
            url: endpoint,
            method,
            params: method === 'GET' ? data : undefined,
            data: method !== 'GET' ? data : undefined,
        });

        return {
            data: resquest.data,
        }
    } catch (error) {
        const e = error as AxiosError<{ message: string }>;

        return {
            error: e.response?.data?.message ?? e.message
        };
    }
}