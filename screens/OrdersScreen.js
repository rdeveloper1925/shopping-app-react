import React from 'react'
import {useSelector} from 'react-redux';
import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native';
import OrdersCard from '../components/OrdersCard';

const OrdersScreen = () => {
    const orders = useSelector(state => state.ordersSlice.orders);
    return (
        <SafeAreaView>
            <FlatList
                data={orders}
                keyExtractor={item=>item.id.toString()}
                renderItem={
                    itemData=>
                        <OrdersCard
                            id={itemData.item.id}
                            orderDate={itemData.item.orderDate}
                            orderItems={itemData.item.orderItems}
                            total={itemData.item.sum}
                        />
                }
            />
        </SafeAreaView>
    )
}

export default OrdersScreen;


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
