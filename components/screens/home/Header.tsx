import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {FC, useEffect} from 'react'
import Avatar from '../../ui/Avatar'
import { useNavigation } from '@react-navigation/native'
import {Entypo} from '@expo/vector-icons'
import { useProfile } from '../profile/useProfile'
import Loader from '../../ui/Loader'
import { db } from '../../../util/firebase'
interface IHeader{

}

const Header:FC = () => {
    
    const {navigate} = useNavigation() 
    const {name, isLoading} = useProfile()
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