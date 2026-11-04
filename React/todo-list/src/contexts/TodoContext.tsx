import React, { createContext, useReducer } from 'react';
import type { TodoActions, TodoState } from './reducers/todoReducer';
import { todoReducer, initialState } from './reducers/todoReducer';

type Props = {
    children: React.ReactNode;
};

type ContextType = {
    state: TodoState;
    dispatch: React.Dispatch<TodoActions>;
};

export const TodoContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => null,
});

export const TodoContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}