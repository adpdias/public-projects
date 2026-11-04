import type { Todo } from "../../@types/Todo";
import { TodoContext } from "../../contexts/TodoContext";
import styles from "./TodoItem.module.css";
import { type ChangeEvent, useContext } from "react";
import TrashIcon from '../../assets/trash.svg?react'

type Props = {
    data: Todo,
    dataIndex: number;
}

export const TodoItem = ({ data, dataIndex }: Props) => {
    const { dispatch } = useContext(TodoContext);

    const handleDeleteTodo = () => dispatch({ type: "DELETE", payload: { index: dataIndex} });

    const handleToggleDoneTodo = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'CHANGE', payload: { index: dataIndex, isDone: e.target.checked } });
    } 
 
    return (
        <div className={styles.container}>
            <div className={styles.isDoneContainer}>
                <input 
                    type="checkbox" 
                    className={styles.isDoneInput}
                    checked={data.isDone} 
                    onChange={handleToggleDoneTodo} />
            </div>
            <div className={`${styles.taskTitleContainer} ${data.isDone ? styles.taskTitleDone : ""}`}>
                {data.title}
            </div>
            <div className={styles.deleteTaskContainer}>
                <button className={styles.deleteTaskBtn} onClick={handleDeleteTodo}>
                    <TrashIcon />
                </button>
            </div>
        </div>
    )
}