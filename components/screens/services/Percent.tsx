import { StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'

const Percent:FC<{percent: number}> = ({percent}) => {
  return (
    <View style={styles.percentContainer} className='w-0 h-0 bg-transparent absolute top-0 right-0 justify-center items-center'>
      <Text style={styles.text} className='w-10 h-10 absolute'>{percent + '%'}</Text>
    </View>
  )
}

export default Percent

const styles = StyleSheet.create({
    text:{
        fontSize: 10,
        transform: [{rotate: '-40deg'}],
        top: -34,
        left: 7
    },
    percentContainer:{ 
        borderStyle: 'solid',
        borderRightWidth: 27,
        borderTopWidth: 27,
        borderRightColor: 'transparent',
        borderTopColor: '#AAEF00',
        transform: [{rotate: '90deg'}]
    }


})