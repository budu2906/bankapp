import { StyleSheet, Text, View } from 'react-native'
import {FC, ReactNode} from 'react'
interface IPadding{
    children: ReactNode,
    className?: string
}

const Padding:FC<IPadding> = ({children, className}) => {
  return (
    <View className={`px-4  ${className}`}>
      {children}
    </View>
  )
}

export default Padding

const styles = StyleSheet.create({})