import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { AES, enc } from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string;
const LOCAL_STORAGE_KEY = 'TODOS_DATA';

export const userSaveTodos = () => {
    const [gottedInitialData, setGottedInitialData] = useState(false);
    const { state, dispatch } = useContext(TodoContext);

    const handleChangeTodo = () => {
        if(!gottedInitialData) return;

        const value = AES.encrypt(JSON.stringify(state), SECRET_KEY);
        localStorage.setItem(LOCAL_STORAGE_KEY, value.toString());
    }

    useEffect(() => {
        try {
            const todosData = localStorage.getItem(LOCAL_STORAGE_KEY);

            if (todosData) {
                const bytes = AES.decrypt(todosData, SECRET_KEY);
                const decryptedData = bytes.toString(enc.Utf8);
                const parsedData = JSON.parse(decryptedData);
                dispatch({ type: "ADD", payload: parsedData });
            }
            
        } catch {
            alert('Error to get data from localStorage');
        }

        setGottedInitialData(true);
    }, []);

    useEffect(() => { handleChangeTodo() }, [state]);
};