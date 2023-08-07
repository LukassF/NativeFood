import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(searchValue) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    // url: `https://api.api-ninjas.com/v1/cocktail?name=${searchValue}`,
    url: `http://192.168.1.105:5000/api/query=${searchValue}`,
    // 192.168.1.105
    // headers: {
    //   "X-Api-Key": "  RVz6/ihMrkYTJDp3G9yg8g==5LtuWBVLZpYgox7q",
    // },
    contentType: "application/json",
  };

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchValue) getData();
    else {
      setData("");
      setLoading(false);
    }
  }, [searchValue]);

  return [data, loading];
}
