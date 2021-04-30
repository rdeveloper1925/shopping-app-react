import React  from 'react';
import {useSelector} from 'react-redux';
import { StyleSheet, Text, FlatList } from 'react-native'
import ManageCard from '../components/ManageCard'

const ManageProductsScreen = ({navigation}) => {
    const userProducts = useSelector(state => state.productsSlice.userProducts);
    if(userProducts.length===0){
        return (
            <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                <Text>No Products were found. Perhaps add some</Text>
            </View>
        )
    }
    return (
        <FlatList
            data={userProducts}
            keyExtractor={item=>item.id}
            renderItem={
                itemData=>(
                    <ManageCard
                        product={itemData.item}
                        navigation={navigation}
                    />
                )
            }
        />
    )
}

export default ManageProductsScreen

const styles = StyleSheet.create({})
