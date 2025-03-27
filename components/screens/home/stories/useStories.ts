import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../../util/firebase"
import { Istory } from "./types"



export const useStories = () =>{
    const [stories, setStories] = useState<Istory[]>([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
      const snapshot=  onSnapshot(query(collection(db, 'stories')), snapshot=>{

        
        setStories(
            snapshot.docs.map((d)=>({
                _id: d.id,
                ...d.data()
            }) as Istory)

        )
     

      })

     
      setIsLoading(false)
      return ()=> snapshot()

    },[])

    return {stories, isLoading}
}