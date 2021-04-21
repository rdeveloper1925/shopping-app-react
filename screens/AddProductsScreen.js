import React, {useState} from 'react'
import { StyleSheet, ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { Colors } from '../constants/Colors';
import {Entypo} from '@expo/vector-icons';

const AddProductsScreen = (props) => {
    const product=props.route.params.product;

    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);

    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView>
                <TextInput mode="outlined" style={styles.input} label='Product Name' value={title} onChangeText={value=>setTitle(value)} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
                <TextInput keyboardType='decimal-pad' mode="outlined" style={styles.input} label='Product Price' value={price.toString()} onChangeText={value=>setPrice(value)} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
                <TextInput mode="outlined" style={styles.input} label='Description' value={description} onChangeText={value=>setDescription(value)} numberOfLines={3} />
            </KeyboardAvoidingView>
            <Button mode="contained" color={Colors.warning1} icon={()=><Entypo name='save' size={24} color='white'/>} style={styles.button}>
                <Text style={styles.btntxt}>Save Edits!</Text> 
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
        fontSize:15
    }
})
