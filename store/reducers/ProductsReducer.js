import PRODUCTS from "../../models/Products";
import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from '../actions/ProductActions';
import {Product} from "../../models/Products";


const initialState={
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product=>product.ownerId==='u1')
}

const ProductsReducer=(state=initialState, action)=>{
    //console.log(PRODUCTS);
    switch(action.type){
        case ADD_PRODUCT:
            let updatedProducts=[...state.availableProducts];
            let updatedUserProducts=[...state.userProducts];
            updatedProducts.push(action.product);
            updatedUserProducts.push(action.product);
            return {
                ...state,
                availableProducts:updatedProducts,
                userProducts:updatedUserProducts
            }

        case EDIT_PRODUCT:
            let product_id=action.id;
            let product_index=state.availableProducts.findIndex(product=>product.id===product_id);
            let updatedProduct=new Product(
                product_id,
                state.availableProducts[product_index].ownerId,
                action.title,
                state.availableProducts[product_index].imageUrl,
                
                action.description,
                action.price
            )
            updatedProducts=[...state.availableProducts];
            let userUpdatedProducts=[...state.userProducts];
            //replacing the original with the updated
            updatedProducts[product_index]=updatedProduct;
            //check if product exists in userProducts
            if(userUpdatedProducts.findIndex(product=>product.id==product_id)>=0){
                userUpdatedProducts[userUpdatedProducts.findIndex(product=>product.id===product_id)]=updatedProduct;
            }


            return {
                ...state,
                availableProducts:updatedProducts,
                userProducts:userUpdatedProducts
            }


        case DELETE_PRODUCT:
            let currentAvailableProducts=[...state.availableProducts];
            let currentUserProducts=[...state.userProducts];
            let indexInAvailable= currentAvailableProducts.findIndex(product=>product.id==action.id);
            let indexInUserProducts=currentUserProducts.findIndex(product=>product.id==action.id);

            currentAvailableProducts.slice(indexInAvailable,1);
            currentUserProducts.slice(indexInUserProducts,1);

            return {
                ...state,
                availableProducts:currentAvailableProducts,
                userProducts:currentUserProducts
            }

        default:
            return state;
    }
}

export default ProductsReducer;