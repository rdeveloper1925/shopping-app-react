import * as Font from 'expo-font'
import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';
import AppLoading from 'expo-app-loading';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ProductsReducer from './store/reducers/ProductsReducer';
import CartReducer from './store/reducers/CartReducer';
import OrdersReducer from './store/reducers/OrdersReducer';
import ReduxThunk from 'redux-thunk'


export default function App() {
  //loading the fonts
  const [fontLoaded, setFontLoaded] = useState(false);
  const font=Font.loadAsync({
    'open-regular':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if(!fontLoaded){
    return <AppLoading startAsync={font} onFinish={()=>setFontLoaded(true)} onError={(e)=>console.log(e)}/>
  }

  //setting up redux
  const rootReducer = combineReducers({
    productsSlice:ProductsReducer,
    cartSlice:CartReducer,
    ordersSlice:OrdersReducer
  });

  //enabling redux thunk using apply middleware
  const store=createStore(rootReducer,applyMiddleware(ReduxThunk));
  

  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
