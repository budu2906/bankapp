import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Srories from './stories/Srories'
import Accounts from './accounts/Accounts'
import ApplyNewProduct from './apply-new-products/ApplyNewProduct'


const Home = () => {
  return (
    <View>
      <Header/>
      <Srories />
      <Accounts/>
      <ApplyNewProduct/>
   
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})