import {useEffect, useState} from 'react';


// this will accept an array of keys whose values we want to retrieve 

const useAddToLocalStorage = () => {
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState();

  /**
 * We are using session storage to mimic the signup and login  functionalities
 * howver in real word projects you will have a real backend so do not use this here
 * I have also chosen to use session storage instead of local storage so that we 
 * dont overload our visitors browsers local storage since with sesion staorage this 
 * data we add gere will automatically be deleted for us when the browser is closed
 */

  async function uploadData( data ) {
    try {
      for (const key in data) {
        sessionStorage.setItem(key, data[key]);  
      }
    } catch (err) {
      setLoading(false);
      setSuccess(false);
      setError(err.message);
    }
    
    setLoading(false);
    setSuccess(true);
  }

  return {loading, success, err, uploadData};
}

export default useAddToLocalStorage;