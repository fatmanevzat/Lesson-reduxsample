export default function myReducer(state,action) {
    if (action.type === "changeTheState") {
        return action.payload.newState
    }
    return "State Text"
}