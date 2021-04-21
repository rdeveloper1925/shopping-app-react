import {ADD_ORDER} from '../actions/OrderActions'
import dateFormat from 'dateformat';

const initialState={
    orders:[]
}

const OrdersReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_ORDER:
            const date=new Date();
            let currentOrders=state.orders;
            console.log(action.order,"order",action.sum,"totalcost");
            const newOrder= new Order(
                date.getTime(),
                action.sum,
                dateFormat(new Date(),"dddd, mmm dS, yyyy, HH:MM"),
                action.order
            )
            currentOrders.push(newOrder)
            return {
                ...state,
                orders:currentOrders
            };
        default:
            return state;
    }
}

export default OrdersReducer;

const dateFormatter=(date)=>{
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'  '+date.getHours()+':'+date.getMinutes()
}

class Order{
    constructor(id,sum,orderDate,orderItems){
        this.id=id;
        this.sum=sum;
        this.orderDate=orderDate;
        this.orderItems=orderItems;
    }
}