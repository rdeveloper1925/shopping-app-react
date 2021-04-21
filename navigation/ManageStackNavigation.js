import React from 'react'
import { StyleSheet } from 'react-native';
import {Colors} from '../constants/Colors';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import ManageProductsScreen from '../screens/ManageProductsScreen';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import AddProductsScreen from '../screens/AddProductsScreen';

const ManageStackNavigation = ({navigation}) => {
    const ManageStack=createStackNavigator();
    return (
        <ManageStack.Navigator screenOptions={{headerStyle:styles.headerStyle,headerTintColor:'white'}}>
            <ManageStack.Screen name="User Products" component={ManageProductsScreen} options={{
                headerLeft:()=>(
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item iconName='file-tray-stacked' title="Drawer" color="white" onPress={()=>navigation.toggleDrawer()}/>
                    </HeaderButtons>
                ),
                headerRight:()=>(
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item iconName='add-circle-sharp' title="Add Product" color='white' onPress={()=>navigation.navigate('Add Products',{itemTitle:"Add New Product"})}/>
                    </HeaderButtons>
                )
            }}/>
            <ManageStack.Screen name='Add Products' component={AddProductsScreen} options={
                ({route})=>({
                    headerTitle:route.params.itemTitle
                })
            }/>
        </ManageStack.Navigator>
    )
}

export default ManageStackNavigation;

const styles = StyleSheet.create({
    headerStyle:{
        backgroundColor: Colors.primary1
      }
})
