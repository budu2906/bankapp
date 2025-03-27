import { StyleSheet, Text, View } from 'react-native'
import React, {FC} from 'react'
import Padding from './Padding'
interface ISubHeading{
    text: string,
    isCentered?: boolean
}

const SubHeading:FC<ISubHeading> = ({text, isCentered}) => {
  return (
    <Padding>
      <Text className={`text-xl font-bold text-gray-800 ${isCentered? 'text-center' : ''}`}>{text}</Text>
    </Padding>
  )
}

export default SubHeading

const styles = StyleSheet.create({})