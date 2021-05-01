import React, {useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { View, StyleSheet, FlatList, SafeAreaView, ActivityIndicator, Text, Button, SliderComponent } from 'react-native';
import ProductCard from '../components/Card';
import { addToCart } from '../store/actions/CartActions';
import { Snackbar } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { fetchProducts } from '../store/actions/ProductActions';

const ProductsScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    let products = useSelector(state => state.productsSlice.availableProducts);

    const viewDetailsHandler=(title,id)=>{
        console.log({itemTitle:title,itemId:id})
        navigation.navigate('Product Details',{itemTitle:title,itemId:id})
    }
        
    const dispatch=useDispatch();

    const addToCartHandler=(product)=>{
        dispatch(addToCart(product));
    }

    const loadProducts =()=>{
        setIsLoading(true);
        dispatch(fetchProducts());
        setIsLoading(false);
    }

    useEffect(()=>{
        
        loadProducts();
    },[]);

    useEffect(()=>{
        const focus= navigation.addListener('focus',loadProducts);
        return focus;
    },[loadProducts])

    if(!isLoading && products.length===0){
        return (
            <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                <ActivityIndicator color={Colors.accent3} size='large'/>
                <Text>Loading....</Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <FlatList
                data={products}
                renderItem={
                    (itemData)=>(
                        <ProductCard 
                            title={itemData.item.title}
                            imageUrl={itemData.item.imageUrl}
                            price={itemData.item.price}
                            description={itemData.item.description}
                            addToCartHandler={addToCartHandler}
                            navigation={navigation}
                            id={itemData.item.id}
                            viewDetailsHandler={viewDetailsHandler}
                            product={itemData.item}
                        />
                    )
                }
                keyExtractor={(item)=>item.id}
            />
        </SafeAreaView>
    )
}

const Snack=props=>{
    return(
        <Snackbar 
            visible={props.visible}
            action={{
                label:()=><Ionicons name='close-circle-sharp' size={24} color={Colors.accent3}/>,
            }}
        > Item {props.title} has been added to cart</Snackbar>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({})
