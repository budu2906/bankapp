import { StyleSheet, Text, View } from 'react-native'
import {FC, Fragment} from 'react'
import { useAccount } from './useAccount'
import Padding from '../../../ui/Padding'
import Loader from '../../../ui/Loader'
import AccountItem from './AccountItem'

export type  TCurrency = 'USD'| 'GEL' 
export type TCardName = 'VISA' | 'MasterCard'
export interface IAccounts{
    _id: string,
    userId: string,
    balance: number,
    cardNumber: string,
    currency: TCurrency
    name: TCardName
}
const Accounts:FC = () => {
    const { isLoading,account} = useAccount()
  
  return (
    <Padding>
        {isLoading? <Loader/> : account.length ? account.map((accounts, index)=>(
            <Fragment key={accounts._id}>
                <AccountItem  account={accounts}/>
                {index+1 !== account.length && <View style={styles.lastCard}></View>}
            
            </Fragment>
        )) : <Text>You dont have a card</Text>}
    </Padding>
  )
}

export default Accounts

const styles = StyleSheet.create({
    lastCard:{
        borderBottomColor: '#E0E1E2',
        borderBottomWidth: 1,
        marginBottom: 24

    }

})