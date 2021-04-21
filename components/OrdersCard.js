import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, Card } from 'react-native-paper';
import {Colors} from '../constants/Colors';


const OrdersCard = (props) => {
    const [expanded, setExpanded] = useState(false);
    const titleText=<Text>Order#: {props.id} {"\n"}{props.orderDate}</Text>;
    console.log(props," props in card")
    const handlePress = () => setExpanded(!expanded);
    return (
        <Card style={styles.container}>
            <View style={{padding:0}}>
                <List.Accordion
                    title={titleText}
                    titleStyle={styles.title}
                    titleNumberOfLines={2}
                    left={() => <List.Icon color={Colors.accent3}  icon="clipboard" />}
                    expanded={expanded}
                    onPress={handlePress}>
                        <FlatList 
                            keyExtractor={itemData=>itemData.id}
                            data={props.orderItems}
                            renderItem={
                                itemData=>(
                                    <TheItem 
                                        id={itemData.item.id}
                                        price={itemData.item.price}
                                        quantity={itemData.item.quantity}
                                        sum={itemData.item.sum}
                                        title={itemData.item.title}
                                    />
                                )
                            }
                        />
                        <View style={styles.itemContainer}>
                            <View >
                                <Text style={styles.grantTotalTotal}></Text>
                            </View>
                            <View >
                                <Text style={styles.grantTotalTotal}>$ {props.total}</Text>
                            </View>
                        </View>
                </List.Accordion>
            </View>
        </Card>
    )
}

export default OrdersCard

const TheItem=props=>{
    console.log(props)
    return (
        <View style={styles.itemContainer}>
            <View style={styles.info}>
                <Text style={styles.ttl}>{props.title}</Text>
            </View>
            <View style={styles.ttl2}>
                <Text style={styles.ttl2}>{props.quantity} pcs</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.amount}>$ {props.sum}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        borderBottomWidth:1,
        borderBottomColor:Colors.accent2,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:6,
        marginHorizontal:9,
        paddingHorizontal:5,
        marginBottom:7
    },
    container:{
        elevation:5,
        marginHorizontal:6,
        marginVertical:8,
        borderRadius:6
    },
    title:{
        fontWeight: 'bold',
        fontSize:17,
        color:Colors.accent3,
    },
    grandTotal:{
        borderBottomColor:Colors.accent2,
        borderWidth:1,
        marginBottom:6,
        marginHorizontal:8,
        justifyContent:'center',
        alignItems:'center'
    },
    grantTotalTotal:{
        fontWeight:'bold',
        fontSize:18,
        color:Colors.accent3
    },
    info:{
        marginHorizontal:2,
        justifyContent:'center',
        alignItems:'center',
        maxWidth:'30%'
    },
    ttl:{
        fontSize:16,
        textAlign:'left',
        fontWeight:'bold',
    },
    amount:{
        color:Colors.accent3,
        fontWeight:'bold',
        fontSize:17
    },
    ttl2:{
        fontWeight:'bold',
        fontSize:15,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    },
    totalContainer:{

    }
})
