import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface ProductData {
    products: Product[];
}

interface Product  {
  _id: string;
  title: string;
  supplier: string;
  price: string;
  imageUrl: string;
  description: string;
  product_location: string;
}

interface FetchState {
  data: ProductData | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

const useFetch = (): FetchState => {
  const [data, setData] = useState<ProductData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (): Promise<void> => {
    console.log('Before API Call');
    setIsLoading(true);
    
    try {
      const response: AxiosResponse<ProductData> = await axios.get('/api/products/', {baseURL: 'http://172.20.10.2:3000',timeout: 15000,});
      setData(response.data as ProductData);
      console.log('API Response:', response.data);  
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error.message);
    }
    setIsLoading(false);
    console.log('After API Call');
  };

  useEffect(() => {
    fetchProducts();
  }, []); 

  const refetch = () => {
    setIsLoading(true)
    fetchProducts()
  }

  return { data, isLoading, error, refetch };
};

export default useFetch;
