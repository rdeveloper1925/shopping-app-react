import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import {Colors} from '../constants/Colors';
import {Entypo} from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../store/actions/CartActions';

const CartListItem = (props) => {
    const dispatch=useDispatch()
    return (
            <View style={styles.container}>
                <Image source={props.imageUrl} style={{width:50,height:50,borderRadius:15}}/>
                <View style={styles.info}>
                    <Text style={styles.ttl}>{props.title}</Text>
                    <Text style={styles.ttl2}>{props.quantity} pc</Text>
                </View>
                <View style={[styles.info,{maxWidth:'20%'}]}>
                    <Text style={[styles.ttl,{color:Colors.accent3}]}>${parseFloat(props.sum).toFixed(2)}</Text>
                </View>
                <View style={[styles.info,{maxWidth:'20%',marginLeft:4}]}>
                    <Entypo onPress={()=>dispatch(deleteFromCart(props.id))} name='trash' color='red' size={21}/>
                </View>
            </View>
    )
}

export default CartListItem;

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:15,
        padding:10,
        justifyContent:'space-between',
        backgroundColor:'white',
        elevation:5,
        flexDirection:'row'
    },
    ttl:{
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center'
    },
    ttl2:{
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center'
    },
    info:{
        marginHorizontal:2,
        justifyContent:'center',
        alignItems:'center',
        maxWidth:'30%'
    }
})
