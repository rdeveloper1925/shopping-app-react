import React from 'react'
import {Colors} from '../constants/Colors';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import OrdersScreen from '../screens/OrdersScreen';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';


const OrdersStackNavigation = ({navigation}) => {
    const OrderStack=createStackNavigator()
    return (
        <OrderStack.Navigator screenOptions={{headerStyle:styles.headerStyle,headerTintColor:'white'}}>
            <OrderStack.Screen name="My Orders" component={OrdersScreen} options={{
                headerLeft:()=>(
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item iconName='file-tray-stacked' title="Drawer" color="white" onPress={()=>navigation.toggleDrawer()}/>
                    </HeaderButtons>
                )
            }}/>
        </OrderStack.Navigator>
    )
}

export default OrdersStackNavigation

const styles=StyleSheet.create({
    headerStyle:{
      backgroundColor: Colors.primary1
    }
})
