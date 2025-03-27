import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { IAccounts } from './Accounts'

const Balance:FC<{account: IAccounts}> = ({account}) => {
  return (
    <View className='w-8/12'>
      <Text className='text-[15] mt-2 font-bold'>{account.name}</Text>
      <Text>
        {Intl.NumberFormat(undefined, {
            currency: account.currency,
            style: 'currency'
        }).format(account.balance)}
      </Text>
    </View>
  )
}

export default Balance

const styles = StyleSheet.create({})