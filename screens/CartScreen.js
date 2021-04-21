import React from 'react'
import { StyleSheet, Text, ScrollView,FlatList, View } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Entypo} from '@expo/vector-icons';
import {Colors} from '../constants/Colors';
import { Button, Card, Title } from 'react-native-paper';
import { clearCart, deleteFromCart } from '../store/actions/CartActions';
import CartListItem from '../components/CartListItem';
import { addOrder } from '../store/actions/OrderActions';



const CartScreen = () => {
    //setting the dispatch for making the order
    const dispatch=useDispatch()
    const orderHandler=(order,totalCost)=>{
        dispatch(addOrder(order,totalCost));
        dispatch(clearCart());
    }

    //getting total cost from redux state
    const totalCost=useSelector(state=>state.cartSlice.sum);

    //transforming cart items to array
    let transformedCartItems=[];
    Object.entries(useSelector(state => state.cartSlice.selectedItems)).map(
        ([key,value])=>{
            transformedCartItems.push(
                {
                    id:key,
                    title:value.title,
                    price:value.price,
                    sum:value.sum,
                    quantity:value.quantity,
                    imageUrl:value.imageUrl
                }
            )
        }
    )
    
    
    //rendering of the totals card
    let total=(
        <View style={styles.totalCard}>
            <Card.Content>
                <Title style={{fontWeight:'bold'}}>Total: <Text style={{color:Colors.accent3,fontWeight:'bold'}}>${totalCost}</Text></Title>
            </Card.Content>
            <Card.Actions>
                <Button onPress={orderHandler.bind(this,transformedCartItems,totalCost)} color='green' icon='check' mode="contained">Check out!</Button>
            </Card.Actions>
        </View>
    )

    return (
        <ScrollView >
            {
                transformedCartItems.length!=0?
                <View>
                    <FlatList
                        keyExtractor={(item)=>item.id}
                        data={transformedCartItems}
                        renderItem={(itemData)=>
                            <CartListItem 
                                imageUrl={itemData.item.imageUrl} 
                                title={itemData.item.title} 
                                sum={itemData.item.sum}
                                id={itemData.item.id}
                                quantity={itemData.item.quantity}/>
                        }
                    />
                    {total}
                </View>
                 : 
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:15}}>
                        <Entypo name='emoji-sad' color={Colors.accent3} size={100}/>
                        <Text style={{fontSize:30,fontWeight:200,textAlign:'center'}}>
                            Sorry! There are no items in the cart.
                        </Text>
                    </View>
            }
            
        </ScrollView>
        
    )
}

const deleteHandler=id=>{
    const dispatch=useDispatch();
    dispatch(deleteFromCart(id));
}

export default CartScreen

const styles = StyleSheet.create({
    totalCard:{
        elevation:5,
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:15,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        padding:6,
        justifyContent:'space-between'
    }
})
