import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {FC, ReactNode} from 'react'


interface Ilayout {
    children: ReactNode,
    isScrollView?: boolean
}

const Layout:FC<Ilayout> = ({children, isScrollView = true}) => {

  return (
    <View className='style-center'>
      {isScrollView? <ScrollView>
        {children}
      </ScrollView> : children}
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({})