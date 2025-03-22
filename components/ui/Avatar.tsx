import { StyleSheet, Text, View } from 'react-native'

import {FC} from 'react'
interface IAvatar{
    name?: string,
    size?: 'small' | 'large'
}

const Avatar:FC<IAvatar> = ({name, size}) => {
  const isSmall = size==='small'
    return (
    <View className={`rounded-full bg-gray ${isSmall? 'w-9 h-9 mr-3 ': 'w-12 h-12 '} items-center justify-center`}>
      <Text className={`text-white ${isSmall? 'text-lg': 'text-xl'} font-medium`}>{name?.slice(0,1)}</Text>
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({})