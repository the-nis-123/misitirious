import axios from '../_api/axios';
import { useQuery } from 'react-query';

const fetchData = async (urlString)=>{
  return await axios({
    method: "get",
    url: urlString,
    headers:{
      "Content-Type": "application/json"
    }
  });
}

const useFetch = (url, uniqueKey) => {
  return useQuery( uniqueKey, () => fetchData(url) );
}

export default useFetch;