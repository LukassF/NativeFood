import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(searchValue, selectedFilter, id, length) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(id);

  const options = {
    method: "GET",

    url: `http://192.168.1.105:5000/api?query=${searchValue}&filter=${selectedFilter}&id=[${
      id instanceof Array ? id.map((id) => id) : id
    }]`,
    // 192.168.1.105

    contentType: "application/json",
  };

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);

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
  }, [searchValue, selectedFilter, id]);

  return [data, loading];
}
