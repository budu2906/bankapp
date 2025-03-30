import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import React,{useState} from 'react'
import { useAuth } from '../../../hooks/useAuth'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../util/firebase'
const Field = () => {
    const {user} = useAuth()
    const [message,setMessage] = useState('')
    const handleMessage = async() =>{
        try {

            await addDoc(collection(db, 'messages'),{
                timestamp: serverTimestamp(),
                userId: user?.uid,
                text: message
            })
            
        } catch (error: any) {
            Alert.alert('Err add new message', error)
        }

        setMessage('')

    }
  return (
    <View className='mt-3 flex-row items-center justify-between py-1'>
      <TextInput className='bg-gray-100 rounded-xl p-3 w-5/6 h-10 rounded-2xl' autoCapitalize='none' placeholder='Enter your message' onChangeText={setMessage} value={message} showSoftInputOnFocus={false}/>
      <Pressable  onPress={handleMessage}>
            <MaterialCommunityIcons name='send-circle-outline' size={42} className='text-blue-300'/>
      </Pressable>
    </View>
  )
}

export default Field

const styles = StyleSheet.create({})