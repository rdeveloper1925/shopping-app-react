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
            console.log(response);
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
            dispatch({type:FETCH_PRODUCTS,products:loadedProducts})
        }).catch(e=>{
            alert(e.message+".. Unable to continue");
            throw e;
        })
        
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
            alert("Product added successfully!");

            dispatch(
                {type:ADD_PRODUCT,product:product,newId:response.data.name}
            );
        }).catch(e=>{
            console.log("Axios error ",e.message);
        })
    }
    
}

export const editProduct=(title,price,description,id)=>{
    return (dispatch)=>{
        axios.patch(
            `https://shopping-app-803dd-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`,
            {
                title:title,
                description:description,
                price:price
            }
        ).then(response=>{
            alert('Product has been updated successfully! '+response.data.title);
        })
        .catch(e=>console.log(e.message))
        return {type:EDIT_PRODUCT,title:title,price:price,description:description,id:id};
    }
    
}

export const deleteProduct=(id)=>{
    return (dispatch)=>{
        axios.delete(
            `https://shopping-app-803dd-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`
        ).then(response=>{
            console.log(response);
        }).catch(e=>{
            console.log(e.message);
        })

        return {type:DELETE_PRODUCT, id:id}
    }
    
}