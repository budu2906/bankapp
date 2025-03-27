import { StyleSheet, Text, View } from 'react-native'
import {FC, useState, useEffect} from 'react'
import {  createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native'
import { useAuth } from '../hooks/useAuth'
import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import Payments from '../components/screens/payments/Payments'
import Services from '../components/screens/services/Services'
import Support from '../components/screens/support/Support'
import More from '../components/screens/more/More'
import Profile from '../components/screens/profile/Profile'
import Footer from '../components/layouts/footer/Footer'
import Transfers from '../components/screens/transfers/Transfers'

const Navigation: FC = () => {
    const Stack = createNativeStackNavigator()
    const {user} = useAuth()
    const ref = useNavigationContainerRef()
    const [name,setName] = useState<string | undefined>()
    useEffect(()=>{
        setName(ref.getCurrentRoute()?.name)
    


    },[])
    useEffect(()=>{
      const listener = ref.addListener('state', ()=>{
        setName(ref.getCurrentRoute()?.name )
      })

      return ()=> ref.removeListener('state', listener)
    },[])
    
  return (
    <>
    <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
    {user?
    <>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='Payments' component={Payments}/>
    <Stack.Screen name='Services' component={Services}/>
    <Stack.Screen name='Support' component={Support}/>
    <Stack.Screen name='More' component={More}/>
    <Stack.Screen name='Profile' component={Profile}/>
    <Stack.Screen name='Transfers' component={Transfers}/>
    
    
    
    </>
    : <Stack.Screen name='Auth' component={Auth}/>}
        </Stack.Navigator>
    </NavigationContainer>
    {user && <Footer currentRoute={name} navigate={ref.navigate}/>}
    </>
  
  )
}

export default Navigation

