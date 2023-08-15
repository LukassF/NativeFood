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

  //Change this to the value that appears under the expo qr code when you run npm start in the client folder
  const port = "YOUR_IP";

  // console.log(id);
  let options;

  if (method === "get")
    options = {
      method: "GET",
      url: `http://${port}:5000/api/recipies?query=${searchValue}&filter=${selectedFilter}&id=[${
        id instanceof Array ? id.map((id) => id) : id
      }]`,
      contentType: "application/json",
    };
  else if (method === "post") {
    options = {
      method: "POST",
      url: `http://${port}:5000/api/recipies`,
      data: bodyData,
      contentType: "application/json",
    };
  }

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      if (method === "post") alert("Recipe uploaded!");
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
