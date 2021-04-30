import PRODUCTS from "../../models/Products";
import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FETCH_PRODUCTS} from '../actions/ProductActions';
import {Product} from "../../models/Products";


const initialState={
    availableProducts: [],
    userProducts: []
}

const ProductsReducer=(state=initialState, action)=>{
    //console.log(PRODUCTS);
    switch(action.type){
        case FETCH_PRODUCTS:
            console.log('fetching')
            return {
                ...state,
                availableProducts:action.products,
                userProducts: action.products.filter(product=>product.ownerId==='u1')
            }

        case ADD_PRODUCT:
            console.log(action.newId);
            action.product.id=action.newId;
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
            return {
                ...state,
                availableProducts:currentAvailableProducts.filter(product=>product.id!==action.id),
                userProducts:currentUserProducts.filter(product=>product.id!==action.id)
            }

        default:
            return state;
    }
}

export default ProductsReducer;