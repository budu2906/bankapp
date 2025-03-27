import { doc, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { Alert } from "react-native"
import { useAuth } from "../../../hooks/useAuth"
import { db } from "../../../util/firebase"
import { useProfile } from "./useProfile"

export const useUpdateProfile = () =>{
    const {user} = useAuth()
    const {profile} = useProfile()
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const updateProfile = async(name:string, docId:string) =>{
        setIsLoading(true)
        if (!user) return
        try {
            const docRef = doc(db, 'users', docId)

            await updateDoc(docRef,{
                displayName: name
            })
            setIsSuccess(true)

            setTimeout(()=>{
                setIsLoading(false)

            },3000)

        } catch (error: unknown) {
        
                Alert.alert('Error update profile', error instanceof Error? error.message: String(error))

        }finally{
            setIsLoading(false)
        }
    }

    return {isLoading, updateProfile, isSuccess}
}