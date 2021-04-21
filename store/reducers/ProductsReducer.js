import PRODUCTS from "../../models/Products";


const initialState={
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product=>product.ownerId==='u1')
}

const ProductsReducer=(state=initialState, action)=>{
    //console.log(PRODUCTS);
    return state;
}

export default ProductsReducer;