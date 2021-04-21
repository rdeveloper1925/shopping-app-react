import React from 'react'
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons'

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton IconComponent={Ionicons} iconSize={25} {...props}/>
    )
}

export default CustomHeaderButton

const styles = StyleSheet.create({})
