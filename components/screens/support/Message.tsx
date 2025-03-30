import { StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'
import { useAuth } from '../../../hooks/useAuth'


export interface IMessage{
    _id: string,
    text:string,
    userId: string
    timestamp: Date | string

}


const Message:FC<{message: IMessage}> = ({message}) => {
    const {user} = useAuth()
    const isMessageByUser = user?.uid === message.userId
 
  return (
    <View className={`flex-row items-end rounded-lg my-2 py-2 px-3 ${isMessageByUser? 'bg-blue-500': 'bg-gray-200 self-start'}`}>
      <Text className={`${isMessageByUser? 'text-white' : 'text-gray-700'} opacity-70 ml-2 `}>{message.text}</Text>
    {/* <Text className={`${isMessageByUser? 'text-white font-[10]':'text-gray-700'} opacity-70 ml-2`}></Text> */}
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})