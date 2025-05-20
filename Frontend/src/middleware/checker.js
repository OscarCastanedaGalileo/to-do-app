const checker = (store) => (next) => (action) => {
    console.log(action);
    if(
        action.type === 'todo/addTodo' &&
        action.payload.name.toLowerCase().includes("bitcoin")
    ) {
        return alert("No puedes comprar bitcoin");
    }
    if(
        action.type === 'goals/addGoal' &&
        action.payload.name.toLowerCase().includes("bitcoin")
    ) {
        return alert("No puedes comprar bitcoin");
    }
    return next(action);
}
export default checker;