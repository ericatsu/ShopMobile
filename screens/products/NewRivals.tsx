import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import ProductList from './ProductList';


interface NewRivalsProps {
    navigation: any;
}
const NewRivals = ({ navigation }: NewRivalsProps) => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-white'>
         <View className='w-80 mx-4 flex-row justify-start items-center absolute bg-green-800 rounded-2xl top-3 z-10'>
         <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name='chevron-back-circle' size={34} color="white"/>
       </TouchableOpacity>

       <Text className='text-white ml-2 font-bold text-lg'>Product</Text>
         </View>
         <ProductList/>
      </View>
    </SafeAreaView>
  )
}

export default NewRivals