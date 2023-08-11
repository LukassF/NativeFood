import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(
  method,
  searchValue,
  selectedFilter,
  id,
  length,
  bodyData
) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(id);
  let options;

  if (method === "get")
    options = {
      method: "GET",
      url: `http://192.168.1.105:5000/api/recipies?query=${searchValue}&filter=${selectedFilter}&id=[${
        id instanceof Array ? id.map((id) => id) : id
      }]`,
      // 192.168.1.105
      contentType: "application/json",
    };
  else if (method === "post") {
    options = {
      method: "POST",
      url: "http://192.168.1.105:5000/api/recipies",
      data: bodyData,
      contentType: "application/json",
    };
  }

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      if (method === "post") setData(response.status);
      if (length > 0) setData(response.data.slice(0, length));
      else if (id instanceof Array && !id[0]) setData([]);
      else setData(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [searchValue, selectedFilter, id, bodyData]);

  return [data, loading];
}
