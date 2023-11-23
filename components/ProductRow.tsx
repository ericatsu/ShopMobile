import { FlatList, View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import { useNavigation } from '@react-navigation/native'
import useFetch from '../hooks/useFetch'

const ProductRow = () => {
    const {data, isLoading, error } = useFetch()
    //const products = [1,2,3,4]
    const navigation = useNavigation();

    if (isLoading) {
      return <ActivityIndicator size={20} color="#2d29ec" />;
    }
  
    if (error) {
      return <Text>Error: {error}</Text>;
    }

    console.log('ProductRow - Data:', data);
    
  return (
    <View className="mt-2 ml-5 mr-5">
    {data && data.length > 0 ? (
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ProductCard navigation={navigation} item={item} />}
        horizontal
        contentContainerStyle={{ columnGap: 2 }}
      />
    ) : (
      <Text>No products available.</Text>
    )}
    </View>
  )
}

export default ProductRow

