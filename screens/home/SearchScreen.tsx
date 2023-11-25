import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SearchScreen = () => {
  const navigation = useNavigation();

  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState();
  

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://197.255.122.235:3000/api/products/search/${searchKey}`);
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');
    } catch (error) {
      console.log("Failed to get product:", error);
    }
  }

  return (
    <SafeAreaView>
      <View className="flex flex-row items-center justify-center bg-slate-300 p-3 rounded-2xl m-3">
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
      
      <TouchableOpacity onPress={() => handleSearch()} className=''>
      <Ionicons name="search-outline" size={24} color="#8d8d8d"/>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen