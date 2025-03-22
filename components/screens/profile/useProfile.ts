    import { collection, getDoc, getDocs, limit, onSnapshot, query, snapshotEqual, where } from "firebase/firestore"
    import { useEffect, useMemo, useState } from "react"
    import {FC} from 'react'
    import { useAuth } from "../../../hooks/useAuth"
    import { db } from "../../../util/firebase"
    interface IuseProfile{
        _id: string,
        displayName: string
        docId: string

    }
    export const useProfile = () =>{
        const {user} = useAuth()
        const [isLoading,setIsLoading] = useState(true)
        const [profile,setProfile] = useState<IuseProfile>({} as IuseProfile )
        const [name,setName] =useState('')


    useEffect(()=>{

        const q = query(collection(db, 'users'), where('userId', '==', user?.uid), limit(1))
        onSnapshot(q, snapshotEqual=>{
            const profile = snapshotEqual.docs.map(d=>({
                ...(d.data() as Omit <IuseProfile, 'docId'>),
                docId: d.id
                
            }))[0]
            setProfile(profile)
            setName(profile.displayName)
            setIsLoading(false)
        })

    },[])

    const value = useMemo(()=>({
    profile, isLoading, name,setName

    }),[name,profile,isLoading])

    return value
    }

