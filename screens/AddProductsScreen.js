import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import {useDispatch} from 'react-redux';
import { TextInput,Button } from 'react-native-paper';
import { Colors } from '../constants/Colors';
import {Entypo} from '@expo/vector-icons';
import {Product} from '../models/Products';
import { addProduct } from '../store/actions/ProductActions';

const AddProductsScreen = (props) => {
    const product=props.route.params.product;
    //id,ownerId,imageUrl,title,description,price
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const dispatch=useDispatch();

    const submitHandler=()=>{
        let product=new Product(
            "p"+new Date().getMilliseconds(),
            "u1",
            title,
            require('../assets/img/unnamed.png'),
            description,
            price
        );
        dispatch(addProduct(product));
        alert('Product added successfully!!');
        props.navigation.navigate("User Products");
    }

    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView>
                <TextInput  mode="outlined" style={styles.input} label='Product Name' value={title} onChangeText={value=>setTitle(value)} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
                <TextInput keyboardType='number-pad' mode="outlined" style={styles.input} label='Product Price' value={price.toString()} onChangeText={value=>setPrice(value)} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
                <TextInput  mode="outlined" style={styles.input} label='Description' value={description} onChangeText={value=>setDescription(value)} numberOfLines={3} />
            </KeyboardAvoidingView>
            <Button mode="contained" color={Colors.warning1} icon={()=><Entypo name='save' size={14} color='white'/>} style={styles.button} onPress={submitHandler}>
                <Text style={styles.btntxt}>Save Product!</Text> 
            </Button>
        </ScrollView>
    )
}

export default AddProductsScreen

const styles = StyleSheet.create({
    container:{
        padding:5
    },
    input:{
        marginVertical:13,
        marginHorizontal:5
    },
    button:{
        alignSelf:'center',
        width:'90%',
        marginVertical:15,
        marginHorizontal:10,
        elevation:5,
        height:36,
        borderRadius:10
    },
    btntxt:{
        fontWeight:'bold',
        color:'white',
        fontSize:14
    }
})
