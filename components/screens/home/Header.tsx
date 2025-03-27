import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {FC, useEffect, useState} from 'react'
import Avatar from '../../ui/Avatar'
import { useNavigation } from '@react-navigation/native'
import {Entypo} from '@expo/vector-icons'
import Loader from '../../ui/Loader'
import { db } from '../../../util/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useProfile } from '../profile/useProfile'
interface IHeader{

}

const Header:FC = () => {
  const {isLoading, name} = useProfile()

    const {navigate} = useNavigation() 
  return isLoading? <Loader/> : (
    <View className='px-4 flex-row items-center' >
        <Avatar name={name}/>
        <TouchableOpacity className='flex-row items-end' onPress={()=>navigate('Profile')}>
            <Text className="text-gray-800">{name}</Text>
            <Entypo name='chevron-small-right' size={28} className='text-gray-800'/>
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})