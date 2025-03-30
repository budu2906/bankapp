import { Pressable, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native'
import React,{FC, useEffect, useState} from 'react'
import Padding from '../../ui/Padding'
import { useAccount } from '../home/accounts/useAccount'
import Loader from '../../ui/Loader'
import AccountItem from '../home/accounts/AccountItem'
import Heading from '../../ui/Heading'
import { useAuth } from '../../../hooks/useAuth'
import { handleTransfers } from './handleTransfers'
import { IAccounts } from '../home/accounts/Accounts'

const TransferItem:FC<{toAccount: IAccounts, setIsActive: React.Dispatch<React.SetStateAction<boolean>>}> = ({toAccount, setIsActive }) => {
   const {isLoading, account} = useAccount()
   const [isVisible,setIsVisible] = useState(false)
   const [sum,setSum] = useState('')
  
  return (
    <View>
        <Heading isCentered={true} text='Your Accounts: '/>
    {isLoading? <Loader/> : account.length ? account.map((accounts, index)=>(
<>
<Modal visible={isVisible}>
        <View>
            <TextInput value={sum} onChangeText={setSum}/>
            <Button onPress={()=>{handleTransfers(Number(sum),accounts._id, accounts.currency, accounts.balance, toAccount._id, toAccount.currency, toAccount.balance), setIsVisible(false); ; setIsActive(false)}}  title='submit'/> 
        </View>

        </Modal>

        <Pressable onPress={()=> {setIsVisible(true)} } key={accounts._id}>
            
            <AccountItem  account={accounts}/>
            {index+1 !== account.length && <View style={styles.lastCard}></View>}
  
        
        </Pressable>

</>
        

    )) : <Text>You dont have a card</Text>}
</View>
  )
}

export default TransferItem




const styles = StyleSheet.create({

    lastCard:{
        borderBottomColor: '#E0E1E2',
        borderBottomWidth: 1,
        marginBottom: 24

    }
})