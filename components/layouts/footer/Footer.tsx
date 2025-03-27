import { StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'
import Padding from '../../ui/Padding'
import { menu } from './menu'
import NavItem from './NavItem'
import { TypeRootStackParamList } from '../../../navigation/types'

export interface IFooter{
    navigate: (screenName: keyof TypeRootStackParamList)=> void
    currentRoute?: string 
}

const Footer:FC<IFooter> = ({navigate, currentRoute}) => {
  return (
    <Padding  className=' border-black border-[1] flex-row justify-betwen items-center w-full bg-gray-50 px-0 pb-5 pt-2 '>
       {menu.map((item)=>(
        <NavItem currentRoute={currentRoute} navigate={navigate} key={item.title} item={item}/>
       ))}

    </Padding>
  )
}

export default Footer

