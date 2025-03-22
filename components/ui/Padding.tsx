import { StyleSheet, Text, View } from 'react-native'
import {FC, ReactNode} from 'react'
interface IPadding{
    children: ReactNode
}

const Padding:FC<IPadding> = ({children}) => {
  return (
    <View className='px-4 '>
      {children}
    </View>
  )
}

export default Padding

const styles = StyleSheet.create({})