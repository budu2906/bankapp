import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../layouts/Layout'
import Heading from '../../ui/Heading'
import Contacts from './contacts/Contacts'
import Other from './other/Other'

const Payments = () => {
  return (
    <Layout>
      <Heading isCentered={false} text='Payments'/>
      <Contacts/>
      <Other/>
    </Layout>
  )
}

export default Payments

const styles = StyleSheet.create({})