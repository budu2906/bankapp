import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { auth, db, login, logout, register } from "../util/firebase";
import {addDoc, collection, doc, setDoc} from 'firebase/firestore'

interface Icontext{
    user: User | null
    isLoading: boolean,
    register: (email: string, password:string)=>Promise<void>
    login: (email:string,password:string)=>Promise<void>
    logout: ()=> Promise<void>

    

}

export const AuthContext = createContext<Icontext> ({} as Icontext)

export const AuthProvider:FC<{children:ReactNode}>= ({children})=>{
    const [user,setUser] = useState<User | null>(null)
    const [isLoadingInitial, setIsLoadingInitial] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const registerHandler = async(email: string, password: string) =>{
        setIsLoading(true)
        try {
            const {user} = await register(email, password)
           const docRef= await addDoc(collection(db, 'users'),{
                _id: user.uid,
                displayName: 'No name'
            })
            
            console.log(docRef)

        } catch (error: unknown) {
            Alert.alert('Error :', error instanceof Error?error.message : String(error))
            
        }finally{
            setIsLoading(false)
        }

    }
    
    const loginHandler = async(email: string, password:string) =>{
        setIsLoading(true)
        try {
            await login(email,password)

            
        } catch (error: unknown) {
            Alert.alert('Error :', error instanceof Error?error.message : String(error))


        }finally{
            setIsLoading(false)
        }

    }

    const logoutHandler = async() =>{
        setIsLoading(true)
        try {
            await logout()

            
        } catch (error: unknown) {
            Alert.alert('Error :', error instanceof Error?error.message : String(error))


        }finally{
            setIsLoading(false)
        }

    }

    useEffect(()=>{
        onAuthStateChanged(auth,user => {
            setUser(user || null)
            setIsLoadingInitial(false)
        })

    },[])
    const value = useMemo(()=>({
        user,
        isLoading,
        logout:logoutHandler,
        login:loginHandler,
        register:registerHandler

    }),[user,isLoading])
    return <AuthContext.Provider value={value}>
        {!isLoadingInitial &&children}

    </AuthContext.Provider>
}