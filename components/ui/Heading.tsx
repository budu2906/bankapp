import { StyleSheet, Text, View } from 'react-native'
import {FC} from 'react'
import Padding from './Padding'
interface IHeading{
    text: string,
    isCentered?: boolean
}
const Heading:FC<IHeading> = ({text, isCentered=false}) => {
  return (
    <Padding>
      <Text className={`text-2xl font-bold text-gray-800 ${isCentered? 'text-center' : ''}`}>{text}</Text>
    </Padding>
  )
}

export default Heading

const styles = StyleSheet.create({})