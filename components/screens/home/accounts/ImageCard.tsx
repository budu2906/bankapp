import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { IAccounts } from './Accounts'

const ImageCard:FC<{account?: IAccounts}> = ({account}) => {
  return (
    <View>
      <Text>ImageCard</Text>
    </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({})