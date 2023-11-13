import { useState, useEffect } from 'react';
import axios from 'axios';


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
    setIsLoading(true);
    
    try {
      const response = await axios.get('http://10.0.2.2:3000/api/products/', {timeout: 5000,});
      setData(response.data as ProductData);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error.message);
    }
    setIsLoading(false);
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
