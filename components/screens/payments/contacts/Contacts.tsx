import { StyleSheet, Text, View,  ScrollView} from 'react-native'
import React from 'react'
import { useContacts } from './useContacts'
import SubHeading from '../../../ui/SubHeading'
import Loader from '../../../ui/Loader'
import ContactItem from './ContactItem'

const Contacts = () => {
    const {contacts, isLoading} = useContacts()
  return (
    <View className='my-8'>
      <SubHeading text='Transfers'/>
      {isLoading? <Loader/> : 
        <ScrollView className='' showsHorizontalScrollIndicator={false} horizontal>
            {contacts.map((item)=>(
                <ContactItem key={item._id}  contact={item}/>

            ))}
        
        </ScrollView>
    }
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({})