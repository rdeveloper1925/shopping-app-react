import React from 'react'
import {useSelector} from 'react-redux';
import { StyleSheet, FlatList, ScrollView } from 'react-native';
import OrdersCard from '../components/OrdersCard';

const OrdersScreen = () => {
    const orders = useSelector(state => state.ordersSlice.orders);
    console.log(orders,'orders');
    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={item=>item.id}
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
        </ScrollView>
    )
}

export default OrdersScreen;


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
