import dayjs from 'dayjs'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React,{useState, useEffect} from 'react'
import { db } from '../../../util/firebase'
import { IMessage } from './Message'



export const useMessages = () =>{
    const [message, setMessage] = useState<IMessage[]>([])
    const [isLoading, setIsLoading] = useState()


    useEffect(()=>{
        const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'))
        const unsub = onSnapshot(q, snap=>{


            
             setMessage(

                snap.docs.map(d=>d.data()?.timestamp?({
                    _id: d.id,
                    timestamp: dayjs.unix(d.data()?.timestamp).format('HH:mm'),
                    ...d.data()
                } as IMessage) :({
                    _id: d.id,
                    ...d.data()
                } as IMessage) )
             )
              
            
        }
      

    )
        return ()=> unsub()
        
    },[])
    return {message, isLoading}

}