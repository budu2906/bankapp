import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { IAccounts } from './Accounts'
import {FontAwesome} from '@expo/vector-icons'

const Currency:FC<{currency: IAccounts['currency']}> = ({currency}) => {
  return (
    <View className='rounded-full bg-blue-500 w-9 h-9 items-center justify-center'>
      <View className='w-5 h-5 rounded-full items-center justify-center bg-[#EDF4FE]'>
        <FontAwesome color='488cf9' size={13} name={currency==='USD'? 'usd' : 'bitcoin'}/>

      </View>
    </View>
  )
}

export default Currency

const styles = StyleSheet.create({})