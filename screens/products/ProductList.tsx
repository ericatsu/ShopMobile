import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch';
import { useNavigation } from '@react-navigation/native';
import ProductCard from '../../components/ProductCard';

const ProductList = () => {
    const {data, isLoading, error } = useFetch()
    const navigation = useNavigation();

    if (isLoading) {
      return (
        <View className='flex-1 items-center justify-center content-center'>
            <ActivityIndicator size={50} color="#2d29ec" />
        </View>
      );
    }
    
  return (
    <View className="items-center pt-12 pl-2">
      <FlatList
       data={data}
       numColumns={2}
       renderItem={({ item }) => <View className='mr-10 ml-5 items-center'><ProductCard navigation={navigation} item={item} /></View>}
       ItemSeparatorComponent={() => <View className='h-4'/>}
       contentContainerStyle={{ alignItems: 'center', paddingTop: 4, paddingLeft: 4}}
       />
    </View>
  )
}

export default ProductList