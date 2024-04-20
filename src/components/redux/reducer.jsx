const instalState ={
carts: [],
addCarts: JSON.parse(localStorage.getItem("basket")) || []
}


export const Reducer = (state = instalState,action) => {
    switch(action.type){
    case "ADD_TO_CART":
        return {
           ...state,
            addCarts: action.payload
        }
    case "REMOVE_FROM_CART":
        return {
           ...state,
            addCarts: state.addCarts.filter(item => item.id!== action.payload.id)
        }
    default:
        return state;
    }
