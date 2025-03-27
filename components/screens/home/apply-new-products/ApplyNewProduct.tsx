import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Padding from '../../../ui/Padding'
import LoginButton from '../../../../util/LoginButton'
import { AsyncAlert } from './AsyncAlert'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../../util/firebase'
import { useAuth } from '../../../../hooks/useAuth'
import { getRandomCardNumber } from '../../../../util/getRandomCardNumber'

const ApplyNewProduct:FC = () => {
    const {user} = useAuth()
    const registerHander = async() =>{
        try {
            const currency = await AsyncAlert({
                title: 'Currency', 
                msg: 'Select Account Currency:',
                buttons:{
                    text: 'GEL',
                    resolveValue: 'GEL',
                    textSecond: 'USD',
                    resolveValueSecond: 'USD'
                }
            })

            const cardType = await AsyncAlert({
                title: 'Card Type', 
                msg: 'Select Card Type:',
                buttons:{
                    text: 'Black',
                    resolveValue: 'VISA',
                    textSecond: 'All',
                    resolveValueSecond: 'MasterCard'
                }
            })

            await addDoc(collection(db, 'accounts'),{
                timestamp: serverTimestamp(),
                userId: user?.uid,
                balance: 0,
                cardNumber: getRandomCardNumber(),
                currency,
                name: cardType

            })
            
        } catch (error: unknown) {
            Alert.alert('Error appied, while creating new product',error instanceof Error? error.message : String(error)  )
        }
    }
  return (
    <Padding >
        <LoginButton colors={['bg-yellow-500', '']} onPress={registerHander} title='Apply for a new product'/>

       
    </Padding>
  )
}

export default ApplyNewProduct

const styles = StyleSheet.create({})