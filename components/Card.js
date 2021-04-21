import * as React from 'react';
import { Button, Card, TouchableRipple, Paragraph,Content } from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../constants/Colors'
import { Feather } from '@expo/vector-icons'; 

const ProductCard = (props) =>{
    const parameters={theTitle:props.title,theId:props.id}
    return (
        <Card style={styles.card}>
            <TouchableRipple onPress={props.viewDetailsHandler.bind(this,props.title,props.id)}>
                <View>
                    <Card.Cover source={props.imageUrl} height='100%' width='100%' />
                    <Card.Title title={props.title} subtitle={"$ "+props.price} titleStyle={styles.title} subtitleStyle={styles.subtitle} />
                    <Card.Actions style={{justifyContent:'space-between',alignItems:'center'}}>
                    <Button mode="outlined" color={Colors.accent3} icon={()=><Feather name="clipboard" size={17} color={Colors.accent3} />} onPress={props.viewDetailsHandler.bind(this,props.title,props.id)}>View Detail</Button>
                    <Button mode="outlined" color={Colors.accent3} onPress={props.addToCartHandler.bind(this,props.product)} icon='cart'>Add to cart</Button>
                </Card.Actions>
                </View>
            </TouchableRipple>
                
        </Card>
)
    }

export default ProductCard;

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