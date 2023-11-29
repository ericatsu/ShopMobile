import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchTile = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')} className='flex-1 justify-center items-center mb-3 flex-row p-4 rounded bg-white shadow-md shadow-slate-50'>
        <View className='w-3/4 bg-slate-400 rounded-md justify-center items-center'>
          <Image source={{uri: item.imageUrl}} className='w-full h-10 resize rounded-sm'/>
        </View>

        <View className='flex-1 mx-5'>
           <Text className='text-sm font-bold'>{item.title}</Text>
           <Text>{item.description}</Text>
           <Text>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTile

