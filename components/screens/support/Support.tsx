import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Layout from '../../layouts/Layout'
import Padding from '../../ui/Padding'
import Header from './Header'

import Message from './Message'
import { useMessages } from './useMessages'
import Field from './Field'

const Support = () => {
  const {message: messages, isLoading} =useMessages()
  return (
    <Layout  isScrollView={false}>
      <Padding>
   
        <Header/>
      
     <ScrollView style={{height: '63%'}} >
            {messages.map(msg=><Message key={msg.text} message={msg}/>)}
        </ScrollView>
        <Field/>
    
      </Padding>
    </Layout>
  )
}

export default Support

const styles = StyleSheet.create({})