import { StyleSheet, Text, View } from 'react-native'
import {FC} from 'react'
import { IFooterItem } from '../../../../layouts/footer/types'
import {AntDesign} from '@expo/vector-icons'

interface IIcon extends Pick<IFooterItem, 'iconName'>{

}

const Icon:FC<IIcon>  = ({iconName}) => {
  return (
    <View className='rounded-full bg-blue-500 w-8 h-8 items-center justify-center'>
      <AntDesign size={18} name={iconName}/>
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({})