import { FlatList, View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import { useNavigation } from '@react-navigation/native'
import useFetch from '../hooks/useFetch'

const ProductRow = () => {
    const {data, isLoading, error } = useFetch()
    //const products = [1,2,3,4]
    const navigation = useNavigation();

  return (
    <View className="mt-2 ml-5 mr-5">
    {
      isLoading ? (
        <ActivityIndicator size={20} color="#2d29ec"/>
      ) : error ? (
        <Text className='justify-center items-center'>Something Went Wrong</Text>
      ) : (
    <FlatList 
      data={data?.products || []}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => { return <ProductCard navigation={navigation} item={item}/>; }}
      horizontal
      contentContainerStyle={{columnGap: 2}}
    />
      )
    }
    </View>
  )
}

export default ProductRow

