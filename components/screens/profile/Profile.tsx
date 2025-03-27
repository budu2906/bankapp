import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useProfile } from './useProfile'
import Layout from '../../layouts/Layout'
import Heading from '../../ui/Heading'
import Padding from '../../ui/Padding'
import Loader from '../../ui/Loader'
import Field from '../../ui/Field'
import { useAuth } from '../../../hooks/useAuth'
import { useUpdateProfile } from './useUpdateProfile'

const Profile = () => {
  const {name, isLoading:isProfileLoading, setName, profile} = useProfile()
  const {logout} =useAuth()
  const {isLoading, isSuccess,updateProfile} = useUpdateProfile()
  return (
    <Layout>
      <Heading text='Profile' isCentered={true}/>
      <Padding>
    {isSuccess && <View className='bg-green-500 p-3 py-2 rounded-lg'>
      <Text className='text-white '>Profile Updated Successfully</Text>

      </View>}
    {(isProfileLoading || isLoading)? <Loader/> : <>
    <Field onChange={setName} val={name}  placeholder='Enter name'/>
    <Button onPress={()=>{updateProfile(name, profile.docId)}} title='Update Profile'/>
    <View className='bg-gray-200 ' >
    <Button onPress={logout} title='Logout'  color='#D6D8DB'/>
    </View>
    
    
    </>}

      </Padding>
    </Layout>
  )
}

export default Profile

