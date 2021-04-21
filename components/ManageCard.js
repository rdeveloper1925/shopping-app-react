import * as React from 'react';
import { Button, Card, TouchableRipple, Text } from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../constants/Colors'
import { Feather } from '@expo/vector-icons'; 

const ManageCard = (props) =>{
    const editHandler=()=>{
        props.navigation.navigate('Add Products',{itemTitle:'Edit Product',product:props.product});
    }

    const deleteHandler=()=>{
        let deleteItem = confirm("Are you sure? ");
    }
    return (
        <Card style={styles.card}>
            <TouchableRipple onPress={()=>console.log('view details')}>
                <View>
                    <Card.Cover source={props.product.imageUrl} height='100%' width='100%' />
                    <Card.Title title={props.product.title} subtitle={"$ "+props.product.price} titleStyle={styles.title} subtitleStyle={styles.subtitle} />
                    <Card.Actions style={{justifyContent:'space-between',alignItems:'center'}}>
                    <Button mode="contained" color={Colors.warning1} icon={()=><Feather name="edit" size={17} color='white' />} onPress={editHandler}>
                        <Text style={{color:'white'}}>Edit Item</Text>
                    </Button>
                    <Button mode="contained" color={Colors.accent1} onPress={deleteHandler} icon='delete'>Delete Item</Button>
                </Card.Actions>
                </View>
            </TouchableRipple>
                
        </Card>
)
    }

export default ManageCard;

const styles=StyleSheet.create({
    card:{
        marginHorizontal:9,
        marginVertical:11,
        elevation:5,
        borderRadius:10,
        overflow:'hidden'
    },
    title:{
        fontWeight:'bold',
        alignSelf:'center'
    },
    subtitle:{
        color:'black', 
        alignSelf:'center',
        fontSize:15,
        fontWeight:'bold'}
})