import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import {DrawerContent, DrawerContentScrollView} from '@react-navigation/drawer'
import { Avatar, Drawer, Text } from 'react-native-paper';
import { Colors } from '../constants/Colors';

const DrawerHeader = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/img/drawer.jpg')} style={styles.imgBg}>
                    <View style={styles.overlay}>
                        <Avatar.Text size={50} color={Colors.accent3} labelStyle={{fontWeight:'bold'}} style={{backgroundColor:Colors.textPrimary2}}  label="RS" />
                        <View style={styles.infoBar}>
                            <Text style={styles.infoBarTitle}>Rodney Mathias </Text>
                            <Text style={styles.infoBarSubTitle}>@mattRodney</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <Drawer.Section title={<Text style={styles.sectionHead}>Actions</Text>}>
                <DrawerContent {...props}/>
            </Drawer.Section>
            
        </DrawerContentScrollView>
    )
}

export default DrawerHeader

const styles = StyleSheet.create({
    container:{
        marginTop:0,
        marginBottom:5,
        padding:0
    },
    imgBg:{
        width:'100%',
        height:Dimensions.get('window').height*0.25,
        marginTop:0
    },
    overlay:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        backgroundColor: 'rgba(255,255,255,0.7)',
        alignItems:'flex-end',
        justifyContent:'flex-start',
        padding:10,
    },
    infoBar:{
        justifyContent:'space-between',
        padding:5
    },
    infoBarTitle:{
        fontSize:16,
        fontWeight:'bold',
        color:Colors.accent3,
        flexWrap:'wrap',
    },
    infoBarSubTitle:{
        fontSize:13,
        color:Colors.accent3,
        fontWeight:'bold',
    },
    sectionHead:{
        fontWeight:'bold',
        fontSize:17,
        color:Colors.accent3
    }
})
