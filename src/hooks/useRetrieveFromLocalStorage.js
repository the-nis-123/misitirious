import {useEffect, useState} from 'react';


// this will accept an array of keys whose values we want to retrieve 

const useRetrieveFromLocalStorage = (keysArr) => {
  const [retrievedData, setRetrievedData] = useState({});
  /**
 * We are using session storage to mimic the signup and login  functionalities
 * howver in real word projects you will have a real backend so do not use this here
 * I have also chosen to use session storage instead of local storage so that we 
 * dont overload our visitors browsers local storage since with sesion staorage this 
 * data we add gere will automatically be deleted for us when the browser is closed
 */

  useEffect(() => {
    async function fetchData( arr ) {
      const data = {};
      arr.forEach(key => {
        data[key] = sessionStorage.getItem(key);
      });

      return data;
    }
    
    try {
      setRetrievedData((prevState) =>{ 
        return{ prevState,...fetchData(keysArr) }
      });
    } catch (err) {
        console.error(err);
    } 
  });

  return retrievedData;
}

export default useRetrieveFromLocalStorage;