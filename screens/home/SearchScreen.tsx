import { View, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { SearchTile } from '../../components';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (!searchKey.trim()) {
      return; 
    }

    try {
      const response = await axios.get(`https://shop-backend-10o1.onrender.com/api/products/search/${searchKey}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log("Failed to get product:", error);
    }
  };

  return (
    <SafeAreaView className='flex-1 bg-gray-100'>
      <View className="flex-row items-center justify-center bg-gray-300 p-3 rounded-2xl m-3">
      <TouchableOpacity onPress={() => {}} >
         <Ionicons name="camera-outline" size={25} color="#8d8d8d"/>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} className="flex-1 ml-2">
          <TextInput
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder='What are you looking for'
          />
        </TouchableOpacity>
      
        <TouchableOpacity onPress={handleSearch}>
      <Ionicons name="search-outline" size={24} color="#8d8d8d"/>
      </TouchableOpacity>
      </View>
      {searchResults && searchResults.length > 0 ? (
      <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} navigation={navigation} />}
        contentContainerStyle={{ columnGap: 2 }}
      />
    ) : (
      <Text className='items-center justify-center text-2xl text-center'>No products available.</Text>
    )}
    </SafeAreaView>
  )
}

export default SearchScreen