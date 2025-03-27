import { collection, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useAuth } from "../../../../hooks/useAuth"
import { db } from "../../../../util/firebase"
import { IAccounts, TCardName } from "./Accounts"

export const useAccount = () =>{
    const {user} = useAuth()
    const [account, setAccount] = useState<IAccounts[]>([])
    const [isLoading, setIsLoading] = useState(false)



    useEffect(()=>{
        setIsLoading(true)
        const q = query(collection(db, 'accounts'), where('userId', '==', user?.uid))
        const unsubscribe =onSnapshot(q, snap=>{
        
       
          setAccount(
            snap.docs.map((d)=>({
                _id: d.id,
                ...d.data()
                
                
            }as IAccounts))
          )

           

        })
        setIsLoading(false)
        return ()=> unsubscribe()
    },[])

    return {isLoading, account}

}