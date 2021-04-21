import {ADD_TO_CART, CLEAR_CART} from '../actions/CartActions';
import {DELETE_FROM_CART} from '../actions/CartActions';


const initialState={
    selectedItems:{},
    sum:0
}

 const CartReducer= (state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const product=action.product;

            if(state.selectedItems[product.id]){
                const newItem=new CartItem(
                    state.selectedItems[product.id].quantity+1,
                    product.title,
                    product.price,
                    state.selectedItems[product.id].sum+product.price,
                    product.imageUrl
                )
                return {
                    ...state,//spread the state
                    selectedItems:{...state.selectedItems, [product.id]:newItem}, //override the property
                    sum:sumFinder({...state.selectedItems, [product.id]:newItem})
                }
            }else{
                const newItem=new CartItem(1,product.title,product.price,product.price,product.imageUrl);
                return {
                    ...state,
                    selectedItems:{...state.selectedItems, [product.id]:newItem},
                    sum:sumFinder({...state.selectedItems, [product.id]:newItem})
                }
            }

        case DELETE_FROM_CART:
            const currentItem=state.selectedItems[action.id];
            const currentSum=state.sum;
            if(currentItem.quantity>1){
                //reducing the quantity
                const updatedItem=new CartItem(
                    currentItem.quantity-1,//reduction here
                    currentItem.title,
                    currentItem.price,
                    currentItem.sum-currentItem.price, //reducing the total price by the removed quantity
                    currentItem.imageUrl
                )

                return {
                    ...state,
                    selectedItems:{...state.selectedItems,[action.id]:updatedItem},
                    sum:(currentSum-currentItem.price).toFixed(2) //reduce the sum by the removed price
                }

            }else{
                //erasing the item completely
                const currentSelectedItems={...state.selectedItems}
                delete currentSelectedItems[action.id];
                return {
                    ...state,
                    selectedItems:currentSelectedItems,
                    sum:(currentSum-currentItem.price).toFixed(2)
                }
            }
        
        case CLEAR_CART:
            return initialState;
            
        default:
            return state;
            
    }
}

export default CartReducer;

const sumFinder=(items)=>{
    let total=0;
    Object.entries(items).map(([key,value])=>{
        total=total+value.sum
    })
    return total.toFixed(2);
}

class CartItem{
    constructor(quantity,title,price,sum,imageUrl){
        this.quantity=quantity;
        this.title=title;
        this.price=price;
        this.sum=sum;
        this.imageUrl=imageUrl;
    }
}