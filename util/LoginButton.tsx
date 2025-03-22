import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import {FC} from 'react'
interface ILoginButton{
    onPress?: ()=> void
    title: string,
    colors: [string, string] 
}
const LoginButton:FC<ILoginButton> = ({onPress, colors , title}) => {
  return (
    <TouchableHighlight className={`${colors[0]} text-gray-800 rounded-xl w-full my-8 py-3`} underlayColor={colors[1]} onPress={onPress}>
        <Text className='text-center'>{title}</Text>
    </TouchableHighlight>
  )
}

export default LoginButton

const styles = StyleSheet.create({})

