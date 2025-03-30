import { StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'
import { IService } from './data'
import {MaterialIcons} from '@expo/vector-icons'

import Percent from './Percent'
import { LinearGradient } from 'expo-linear-gradient'
import { getRandomGradient } from './getRandomGradient'

const ServiceItem:FC<{service:IService}> = ({service}) => {
  return (
    <View className='mb-4'>
        <View className='rounded-xl overflow-hidden mx-4'>
            <LinearGradient className=' items-center justify-center'  colors={getRandomGradient()}>

                <Percent percent={service.percent}/>
                <MaterialIcons size={200} name={service.iconName} color='#fff'/>
            </LinearGradient>

        </View>
            <Text className='text-xl text-center mt-6'>{service.title}</Text>
    </View>
  )
}

export default ServiceItem
