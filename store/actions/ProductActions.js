
export const ADD_PRODUCT="ADD_PRODUCT";

export const EDIT_PRODUCT="EDIT_PRODUCT";

export const DELETE_PRODUCT="DELETE_PRODUCT";

export const addProduct=(product)=>{
    return {type:ADD_PRODUCT,product:product}
}

export const editProduct=(title,price,description,id)=>{
    return {type:EDIT_PRODUCT,title:title,price:price,description:description,id:id};
}

export const deleteProduct=(id)=>{
    return {type:DELETE_PRODUCT, id:id}
}