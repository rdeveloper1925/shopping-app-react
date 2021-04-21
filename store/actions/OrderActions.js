
export const ADD_ORDER='add_order';

export const addOrder=(order,totalCost)=>{
    return {type:ADD_ORDER,order:order,sum:totalCost}
}