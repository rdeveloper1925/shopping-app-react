import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import ProductsScreen from '../screens/ProductsScreen';
import {Colors} from '../constants/Colors';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { StyleSheet } from 'react-native';


export default function ProductsStackNavigation({navigation}) {
    const ProductsStack=createStackNavigator();
  return (
    <ProductsStack.Navigator screenOptions={{headerStyle:styles.headerStyle,headerTintColor:'white'}}>
        <ProductsStack.Screen name="Shop Products" component={ProductsScreen} options={{
          headerLeft:()=>(
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item iconName='file-tray-stacked' title="Drawer" color="white" onPress={()=>navigation.toggleDrawer()}/>
            </HeaderButtons>
          ),
          headerRight: ()=>(
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item iconName='cart' title="Cart" color="white" onPress={()=>navigation.navigate('Cart')}/>
            </HeaderButtons>
          ),
        }}/>
        <ProductsStack.Screen name="Product Details" component={ProductDetailScreen} options={
          ({route})=>({
            headerTitle:route.params.itemTitle,
            headerRight:()=>(
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item iconName='cart' title='cart' color='white' onPress={()=>navigation.navigate('Cart')}/>
              </HeaderButtons>
            )
          })
        }/>
        <ProductsStack.Screen name="Cart" component={CartScreen}/>
    </ProductsStack.Navigator>
  );
}

  const styles=StyleSheet.create({
    headerStyle:{
      backgroundColor: Colors.primary1
    }
})
