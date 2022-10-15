import { useEffect } from 'react';
import { axiosPrivate } from "../_api/axios";
import useRefresh from './useRefresh';
import useAuth from './useAuth';

const useAxiosPrivate = () => {
  const refresh = useRefresh();
  const auth = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      config => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      }, (error) => Promise.eject(error)
    );
    
    const responseInterceptor = axiosPrivate.interceptors.response.use(
      response => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.eject(error);
      }
    )

    return () => {
      axiosPrivate.interceptors.response.eject(responseInterceptor);
      axiosPrivate.interceptors.request.eject(requestInterceptor);
    }
  }, [auth, refresh]);
  
  return axiosPrivate;
}

export default useAxiosPrivate