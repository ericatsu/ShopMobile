import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Headings = () => {
  return (
    <View className="">
      <View className="">
       <Text className="">New Rivals</Text>
       <TouchableOpacity>
         <Ionicons name='ios-grid' size={24} color={gray}/>
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings

const styles = StyleSheet.create({})