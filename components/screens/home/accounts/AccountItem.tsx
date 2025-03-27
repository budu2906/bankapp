import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { IAccounts } from './Accounts'
import Currency from './Currency'
import Balance from './Balance'
import ImageCard from './ImageCard'

const AccountItem:FC<{account: IAccounts}> = ({account}) => {
  return (
    <View className='flex-row items-center justify-between mb-7' >
     <Currency currency={account.currency}/>
     <Balance account={account}/>
     <ImageCard account={account}/>
    </View>
  )
}

export default AccountItem

const styles = StyleSheet.create({})