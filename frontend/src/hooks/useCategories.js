import api from "@/services/api";
import { useEffect, useState } from "react";

export default function useCategories() {
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await api.get("/category/list");
        console.log(data?.data);
        setCategories(data?.data?.categories);
      } catch (error) {
        console.log(error);
        setCategories([]);
      } finally {
        setIsLoadingCategories(false);
      }
    };
    getCategories();
  }, []);

  return { isLoadingCategories, categories };
}
