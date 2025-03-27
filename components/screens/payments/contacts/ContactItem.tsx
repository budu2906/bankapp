import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {FC} from 'react'
import { Icontact } from './types'
import Avatar from '../../../ui/Avatar'
import { useNavigation } from '@react-navigation/native'

const ContactItem:FC<{contact: Icontact}> = ({contact}) => {
  
  const navigation = useNavigation()

  return (
    <Pressable onPress={()=>navigation.navigate('Transfers', {
      _id:contact._id,
      displayName: contact.displayName
    })}  className='ml-4 mr-1 items-center '>
        <Avatar size='large'  name={contact.displayName}/>
        
      <Text className='mt-1 text-xs'>{contact.displayName}</Text>
    </Pressable>
  )
}

export default ContactItem

const styles = StyleSheet.create({})