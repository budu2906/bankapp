import { StyleSheet, Text, TextInput, View } from 'react-native'
import {FC} from 'react'

interface IField{
    onChange: (val: string) => void
    val: string,
    placeholder: string,
    isSecure?: boolean
}

const Field:FC<IField> = ({onChange, placeholder,val,isSecure}) => {
  return (
    <TextInput className='rounded-xl bg-gray-100 mt-3 p-3 w-full' placeholder={placeholder} value={val} onChangeText={onChange} secureTextEntry={isSecure} />
  )
}

export default Field

const styles = StyleSheet.create({})