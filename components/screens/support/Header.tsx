import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className='flex-row items-center py-1 mb-2 -mt-4'>
        <Image  className='mr-2' width={40} height={40} source={require('../../../assets/support.png')}/>
        <View>
        <Text className='text-sm text-gray-800'>Support</Text>
        <Text className='text-xs text-gray-500'>we are there 24/7</Text>
        </View>
    </View>
    
  )
}

export default Header

const styles = StyleSheet.create({})