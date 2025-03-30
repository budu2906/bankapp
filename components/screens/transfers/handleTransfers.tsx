import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
import { Alert, Modal, View,Pressable } from "react-native";
import { db } from "../../../util/firebase";
import {FC, useState} from 'react'
import { TextInput } from "react-native-gesture-handler";

export const handleTransfers = async(sum: number,fromId: string, fromCurrency: string, fromBalance: number, toId: string, toCurrency: string, toBalance: number) =>{
    
        
    if(fromBalance<Number(sum) || Number(sum)<=0){
        Alert.alert('insufficient balance')
        return
    }   
    if(fromCurrency!==toCurrency){
        Alert.alert('invalid currency')
        return
    }
    let fromData
    let toData

    const fromSnap = await getDoc(doc(db, 'accounts', fromId))
    if(fromSnap.exists()){
        fromData = fromSnap.data()
    }else{
        console.log('document was not found')
    }

    const toSnap = await(getDoc(doc(db, 'accounts', toId)))

    if(fromSnap.exists()){
        toData = toSnap.data()
    }else{
        console.log('document was not found')
    }

    const fromDoc = setDoc(doc(db, 'accounts', fromId),{
        ...fromData,
        balance: fromBalance -Number(sum)
    })
    const toDoc = setDoc(doc(db, 'accounts', toId),{
        ...toData,
        balance: toBalance + Number(sum)
    })

}


