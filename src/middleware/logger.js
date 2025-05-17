const logger = (store) => (next) => (action) => {
    console.group(action);
    console.log("dispatching", action);
    const result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
}
export default logger;