import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useStories } from './useStories'
import Loader from '../../../ui/Loader'
import StoryItem from './StoryItem'

const Srories = () => {
    const {stories, isLoading} = useStories()
  return (
    <View className='my-7'>
      {isLoading? <Loader/> : <>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {stories.map((story)=> <StoryItem key={story._id} story={story}/>)}
        </ScrollView>
      
      </>}
    </View>
  )
}

export default Srories

const styles = StyleSheet.create({})