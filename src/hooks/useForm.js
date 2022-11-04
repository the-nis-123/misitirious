import {useState} from 'react';

const useForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    let newEntry = {};
    e.persist();

    if(e.target.value){
      newEntry[e.target.name] = e.target.value;

      setFormData((prevState) => {
        return {
          ...prevState,
          ...newEntry
        }
      });
    }
    console.log(newEntry);

    newEntry = {};
  }

  return {formData, handleChange};
}

export default useForm;