import List from "./list";
import { useSelector, useDispatch } from "react-redux";
import {
    addGoal,
    selectGoals,    
} from "../reducers/goalsSlice";
import { useRef } from "react";
export function Goals() {
    const dispatch = useDispatch();
    const todos = useSelector(selectGoals);
    const inputRef = useRef();
    const addItem = (e) => {
        e.preventDefault();
        dispatch(addGoal({'name': inputRef.current.value}))
    }
    return (
        <div>
            <h1>Goals</h1>
            <input type="text" placeholder="Add To Do" ref={inputRef} />
            <button onClick={addItem}>Add</button>
            <List items={todos} />
        </div>
    );
}
export default Goals;