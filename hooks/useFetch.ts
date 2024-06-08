import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface ProductData {
  products: Product[];
  length: number;
}

interface Product {
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
      const response: AxiosResponse<ProductData> = await axios.get(
        "/api/products/",
        { baseURL: "https://shop-backend-10o1.onrender.com", timeout: 30000 }
      );
      setData(response.data as ProductData);
      //console.log("API Response Test: ", response);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message || "Unknown error");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const refetch = () => {
    fetchProducts();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
