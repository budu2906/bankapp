import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState, Fragment} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Padding from '../../ui/Padding'
import Heading from '../../ui/Heading'
import SubHeading from '../../ui/SubHeading'
import Avatar from '../../ui/Avatar'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../../util/firebase'
import { IAccounts } from '../home/accounts/Accounts'
import Loader from '../../ui/Loader'
import AccountItem from '../home/accounts/AccountItem'
import TransferItem from './TransferItem'


const Transfers = () => {
    const route = useRoute()
    const {_id, displayName} = route.params
    const [isLoading, setIsLoading] = useState(false)
    const [account, setAccount] = useState<IAccounts[]>([])
    const [currentAccount, setCurrentAccount] = useState<IAccounts>({} as IAccounts)
    const [isActive, setIsActive] = useState(false)


    useEffect(()=>{
        const q = query(collection(db, 'accounts'), where('userId', '==', _id))
        const unsub = onSnapshot(q, snap=>{
            setAccount(
                snap.docs.map((d)=>({
                    _id: d.id,
                    ...d.data()
                    
                    
                }as IAccounts))
            )
            
        })
        setIsLoading(false)
        return () => unsub()
    },[])

  return (
    <View className='gap-5 flex-1 text-center items-center'>
        <Avatar name={displayName} size='large'/>
        <Heading text={`Transfer To ${displayName}`}/>
        <SubHeading text={`${displayName} accounts: `}/>
        {isLoading? <Loader/> : account.length>0? account.map((accounts, index)=>(
            <Pressable onPress={()=>setCurrentAccount(accounts)} key={accounts._id+32}>
                <AccountItem  account={accounts}/>
                {index+1 !== account.length && <View style={styles.lastCard}></View>}
               
            
            </Pressable>
        )) : <Text>{displayName}'s dont have an account</Text>}

<TransferItem  toAccount={currentAccount} />
    </View>
  )
}

export default Transfers

const styles = StyleSheet.create({

    lastCard:{
        borderBottomColor: '#E0E1E2',
        borderBottomWidth: 1,
        marginBottom: 24

    }
})