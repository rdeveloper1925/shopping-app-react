
export const ADD_TO_CART='add_to_card';

export const DELETE_FROM_CART='delete_from_cart';

export const CLEAR_CART='clear_cart';

export const addToCart=(product)=>{
    return {type:ADD_TO_CART, product:product}
}

export const deleteFromCart=(id)=>{
    return {type:DELETE_FROM_CART, id:id}
}

export const clearCart=()=>{
    return {type:CLEAR_CART}
}