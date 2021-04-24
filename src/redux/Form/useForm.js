import {useState, useEffect} from 'react'

//full name, email, passsword, retype password
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );


  return {handleChange, values, handleSubmit, errors};

}

export default useForm;