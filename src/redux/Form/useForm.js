import {useState, useEffect} from 'react'

//full name, email, passsword, retype password
const useForm = () => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: ''
  });

  const [errors, setErrors] = useState({})

  //whenever change something, this should update the values 
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value 
    })
  }

  const handleSubmit = e => {
    console.log("handle sumittt");
    e.preventDefault();
  }

  return {handleChange, values, handleSubmit};

}

export default useForm;