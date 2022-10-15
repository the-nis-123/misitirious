import axios from "../_api/axios";
import useAuth from './useAuth';

const useRefresh = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const res = await axios.get('/subscribers/refresh', { withCredentials: true });
    setAuth((prev) => {
      console.log(prev);
      console.log(res.data);
      return { ...prev, accessToken: res.data };
    });
    return res.data;
  }
  
  return refresh;
}

export default useRefresh