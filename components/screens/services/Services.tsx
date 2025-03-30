import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../layouts/Layout'
import { services } from './data'
import ServiceItem from './ServiceItem'

const Services = () => {
  return (
    <View className='style-center'>
      <Text className='text-center mb-6' >Tbilisi</Text>
    
      

      <FlatList contentContainerClassName='items-center' keyExtractor={({title})=> title} data={services} renderItem={({item})=>
         ( <ServiceItem service={item} />)
      }/>
       

  
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})