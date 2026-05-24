import api from "@/services/api";
import { useEffect, useState } from "react";

export default function useGetData(url, field) {
  const [loading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get(url);
        setDataList(data?.data[field]);
      } catch (error) {
        console.log(error?.response);
        setDataList([]);
      } finally {
        setLoading(false);
      }
    };
    getData();
  },[]);

  return { loading, dataList, setDataList };
}
