import {useState} from 'react'
import { useAuth } from '../../../../hooks/useAuth'
import { Icontact } from './types'
import {useEffect} from 'react'
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../../../util/firebase'
import { IuseProfile } from '../../profile/useProfile'
import { User } from 'firebase/auth'



export const useContacts = () =>{
    const {user} = useAuth()
    const [contacts, setContacts] = useState<Icontact[]>([] )
    const [isLoading,setIsLoading] = useState(false)

    const getUniqueUserId = async () =>{
        const q = query(collection(db, 'users'), where('_id', '!=', user?.uid))
        const querySnapShot = onSnapshot(q, snap=>{
            snap.docs.map((d)=>{
                const data = d.data() as IuseProfile
                setContacts(prev=> [...prev, data])
                

            })
        })
      
           

    }

    useEffect(()=>{
        getUniqueUserId()
       
     
        
    },[])
    return {contacts, isLoading}
}