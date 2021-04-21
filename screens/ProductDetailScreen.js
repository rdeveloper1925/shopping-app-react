import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Colors} from '../constants/Colors'
import { StyleSheet, View, Text, Image, ScrollView,SafeAreaView } from 'react-native';
import {Button} from 'react-native-paper';
import * as cartActions from '../store/actions/CartActions';

const ProductDetailScreen = (props) => {
    const id=props.route.params.itemId;
    const product = useSelector(state => state.productsSlice.availableProducts.filter(product=>product.id===id)[0])
    
    const dispatch=useDispatch();
    return (
        <SafeAreaView>
            <View>
                <Image style={{width:'100%',height:300}} source={product.imageUrl} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>$ {product.price}</Text>
                <Text style={{marginBottom:10,textAlign:'center',fontSize:16}}>{product.description}</Text>
                <Button onPress={()=>dispatch(cartActions.addToCart(product))} color={Colors.accent3} mode="contained" icon='cart'>Add to Cart</Button>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    imageContainer:{
        flex:1
    },
    detailsContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10
    },
    price:{
        fontWeight:'800',
        marginBottom:5
    }
})
