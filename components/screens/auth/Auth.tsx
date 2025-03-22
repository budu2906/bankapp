import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'
import { useAuth } from '../../../hooks/useAuth'
import Loader from '../../ui/Loader'
import Field from '../../ui/Field'
import LoginButton from '../../../util/LoginButton'
import { login, register } from '../../../util/firebase'

interface IData{
  email: string,
  password: string


}

const Auth = () => {
  const [isReg,setIsReg] = useState(false)
  const [data, setData] = useState<IData>({} as IData) 
  const {isLoading} = useAuth()
  const authHandler = async() =>{
    const {email, password} = data
    if(isReg){
      await register(email,password)
    }else{
      await login(email,password)
     console.log('login')
    }

    setData({} as IData)

  }
  return (
    <View className='style-center'>
      <View className='mx-5 justify-center items-center h-full'>
       <View className='w-9/12'>
       <Text className='text-center text-gray-800 text-2xl font-bold mb-2'>{isReg? 'Sign Up' : 'Sign In'}</Text>
       {isLoading? <Loader/> : <>
       <Field val={data.email} placeholder='Enter Email' onChange={val=>setData({...data,email: val})}/>
       <Field val={data.password} isSecure={true} placeholder='Enter Password' onChange={val=>setData({...data,password: val})}/>
       <LoginButton colors={['bg-yellow-300', '#FBBF24']}  onPress={authHandler} title='Submit'/>
       </>}
       <Pressable onPress={()=>setIsReg(prev=>!prev)}>
        <Text className='text-gray-800 opacity-30 text-right text-sm'>{isReg? 'Login' : 'Sign Up'}</Text>
       </Pressable>
       </View>
      </View>
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({})

