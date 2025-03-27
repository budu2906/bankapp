import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'
import { IotherItem } from '../types'
import Icon from './Icon'
import {BOX_SHADOW} from '../../../../../util/styles'

const OtherItem:FC<{item: IotherItem}> = ({item}) => {
  return (
    <Pressable style={{...BOX_SHADOW}} className='text-center justify-center items-center ml-4 rounded-xl p-2 w-24 h-24 bg-white'>
        <Icon iconName={item.iconName}/>
      <Text className='text-xs mt-4'>{item.title}</Text>
    </Pressable>
  )
}

export default OtherItem

const styles = StyleSheet.create({})