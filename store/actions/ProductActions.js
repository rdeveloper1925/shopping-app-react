import axios from 'axios';
import { Product } from '../../models/Products';
export const ADD_PRODUCT="ADD_PRODUCT";

export const EDIT_PRODUCT="EDIT_PRODUCT";

export const DELETE_PRODUCT="DELETE_PRODUCT";

export const FETCH_PRODUCTS="FETCH_PRODUCTS";

export const fetchProducts=()=>{
    return dispatch=>{
        //fetching products from the server
        axios.get(
            'https://shopping-app-803dd-default-rtdb.europe-west1.firebasedatabase.app/products.json'
        ).then(response=>{
            console.log(response)
            let loadedProducts=[];
            Object.entries(response.data).forEach(([key,value])=>{
                let p=new Product(
                    key,
                    'u1',
                    value.title,
                    value.imageUrl,
                    value.description,
                    value.price
                )
                loadedProducts.push(p);
            })
            console.log('loaded',loadedProducts);
            dispatch({type:FETCH_PRODUCTS,products:loadedProducts})
        }).catch(e=>console.log(e))
        
    }
}

export const addProduct=(product)=>{
    return (dispatch)=>{
        //put async code here
        
        axios.post(
            'https://shopping-app-803dd-default-rtdb.europe-west1.firebasedatabase.app/products.json',
            {
                title:product.title,
                description:product.description,
                imageUrl:product.imageUrl,
                price:product.price
            }
        ).then(response=>{
            console.log(response);
            alert(response.statusText);

            dispatch(
                {type:ADD_PRODUCT,product:product,newId:response.data.name}
            );
        }).catch(e=>{
            console.log("Axios error ",e.message);
        })
    }
    
}

export const editProduct=(title,price,description,id)=>{
    return {type:EDIT_PRODUCT,title:title,price:price,description:description,id:id};
}

export const deleteProduct=(id)=>{
    return {type:DELETE_PRODUCT, id:id}
}