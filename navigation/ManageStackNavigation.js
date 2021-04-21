import React from 'react'
import { StyleSheet } from 'react-native';
import {Colors} from '../constants/Colors';
import {createStackNavigator} from '@react-navigation/stack';
import ManageProductsScreen from '../screens/ManageProductsScreen';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import AddProductsScreen from '../screens/AddProductsScreen';

const ManageStackNavigation = ({navigation}) => {
    const ManageStack=createStackNavigator();
    return (
        <ManageStack.Navigator screenOptions={{headerStyle:styles.headerStyle,headerTintColor:'white'}}>
            <ManageStack.Screen name="Manage Products" component={ManageProductsScreen} options={{
                headerLeft:()=>(
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item iconName='file-tray-stacked' title="Drawer" color="white" onPress={()=>navigation.toggleDrawer()}/>
                    </HeaderButtons>
                ),
                headerRight:()=>(
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item iconName='add-circle-sharp' title="Add Product" color='white' onPress={()=>navigation.navigate('Add Products')}/>
                    </HeaderButtons>
                )
            }}/>
            <ManageStack.Screen name='Add Products' component={AddProductsScreen}/>
        </ManageStack.Navigator>
    )
}

export default ManageStackNavigation;

const styles = StyleSheet.create({
    headerStyle:{
        backgroundColor: Colors.primary1
      }
})
