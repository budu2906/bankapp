import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubHeading from '../../../ui/SubHeading'
import OtherItem from './item/OtherItem'
import { itemData as otherItems } from './item/itemData'

const Other = () => {
  return (
    <View>
        <SubHeading text='Important Transfers'/>
      <ScrollView className='py-5' showsHorizontalScrollIndicator={false} horizontal>
        {otherItems.map((item)=>(
            <OtherItem key={item.title}  item={item}/>

        ))}

      </ScrollView>
    </View>
  )
}

export default Other

const styles = StyleSheet.create({})