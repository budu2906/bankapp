import { StyleSheet, Text, View } from 'react-native'
import {FC} from 'react'
import { useData } from '../../../../hooks/useData'
import Story from './StoryTemplate'

const StoryContainer:FC = () => {
    const {activeStories, setActiveStories} = useData()
    
  return activeStories && (

    <Story onClose={()=>setActiveStories(null)} duration={5000}  imageUrls={activeStories}/>
 
  )
}

export default StoryContainer

const styles = StyleSheet.create({})