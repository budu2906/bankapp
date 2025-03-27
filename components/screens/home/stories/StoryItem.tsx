import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import {FC} from 'react'
import { Istory } from './types'
import { useData } from '../../../../hooks/useData'

const StoryItem:FC<{story: Istory}> = ({story}) => {
    const {setActiveStories} = useData()
  return (
    <Pressable onPress={()=>{setActiveStories(story.images)}}>
      <View  style={{borderWidth: 1}} className='w-24 h-24 rounded-2xl ml-4 border-solid border-blue-400 p-2 '>

        <ImageBackground imageStyle={{borderRadius: 24}} className='w-full h-full justify-end' resizeMode='cover' source={{uri: story.images[0]}}>
            <Text className='text-[12] m-8'>{story.heading}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  )
}

export default StoryItem

const styles = StyleSheet.create({})