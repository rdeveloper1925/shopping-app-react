import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ManageStackNavigation from './ManageStackNavigation';
import {Colors} from '../constants/Colors';
import WishlistScreen from '../screens/WishlistScreen';
import ProductsStackNavigation from './ProductsStackNavigation';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text } from 'react-native';
import OrdersStackNavigation from './OrdersStackNavigation';
import DrawerHeader from '../components/DrawerHeader';



export default function DrawerNavigation(props) {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={DrawerHeader}>
        <Drawer.Screen name="Shop" component={ProductsStackNavigation} options={{
            drawerIcon:({focused})=>(
                <MaterialCommunityIcons name="shopping" size={25} style={[focused?styles.drawerIconActive:styles.drawerIconInactive]} />
            ),
            drawerLabel:({focused})=><Text style={[focused?styles.drawerTextActive:styles.drawerTextInactive]}>Shop</Text>
        }} />
        <Drawer.Screen name="My Orders" component={OrdersStackNavigation} options={{
            drawerIcon: ({focused})=>(
            <MaterialCommunityIcons name="clipboard-text-multiple" size={25} style={[focused?styles.drawerIconActive:styles.drawerIconInactive]} />
            ),
            drawerLabel:({focused})=><Text style={[focused?styles.drawerTextActive:styles.drawerTextInactive]}>My Orders</Text>
        }} />

        <Drawer.Screen name="Manage Products" component={ManageStackNavigation} options={{
            drawerIcon: ({focused})=>(
                <FontAwesome5 name="boxes" size={25} style={[focused?styles.drawerIconActive:styles.drawerIconInactive]} />
            ),
            drawerLabel:({focused})=><Text style={[focused?styles.drawerTextActive:styles.drawerTextInactive]}>Manage Products</Text>
        }} />

        <Drawer.Screen name="My Wishlist" component={WishlistScreen} options={{
            drawerIcon: ({focused})=>(
                <MaterialCommunityIcons name="bell-check" size={25} style={[focused?styles.drawerIconActive:styles.drawerIconInactive]} />
            ),
            drawerLabel:({focused})=><Text style={[focused?styles.drawerTextActive:styles.drawerTextInactive]}>My Wishlist</Text>
        }} />
    </Drawer.Navigator>
  );
}

const styles=StyleSheet.create({
    drawerIconActive:{
        color:Colors.accent3,
        marginHorizontal:2
    },
    drawerIconInactive:{
        color: Colors.textPrimary1,
        marginHorizontal:2
    },
    drawerTextActive:{
        fontWeight:'bold',
        fontSize:15,
        color:Colors.accent3
    },
    drawerTextInactive:{
        fontWeight:'bold',
        fontSize:15,
        color:Colors.textPrimary1
    }
})
