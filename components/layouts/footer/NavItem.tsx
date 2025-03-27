import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{FC, useEffect} from 'react'
import { IFooterItem } from './types'
import {AntDesign} from '@expo/vector-icons'
import { IFooter } from './Footer'
interface INavItem {
    item: IFooterItem
    navigate: IFooter['navigate']
    currentRoute: IFooter['currentRoute']
}

const NavItem:FC<INavItem> = ({item, navigate, currentRoute}) => {

    const isActive = currentRoute===item.title
   
  return (
    <Pressable className={`items-center w-[20%] justify-between ${isActive? 'text-blue-500' : 'text-gray-500' }`} onPress={()=> navigate(item.title)}>
<AntDesign color={`${isActive? 'blue':'gray'}`} name={item.iconName}/>
<Text className={`${isActive? 'text-blue-500 ': 'text-gray-500'} text-xs mt-1 font-bold   `}>
{item.title}
</Text>
    </Pressable>
  )
}

export default NavItem

const styles = StyleSheet.create({})