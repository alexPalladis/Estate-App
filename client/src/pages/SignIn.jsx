import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice.js'
import OAuth from '../components/OAuth.jsx';

function SignIn() {
  const [formData,setFormData] = useState({});
  const {error,loading} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData(
      {...formData,
        [e.target.id]: e.target.value,
      })
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signin`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if(data.success === false){
      dispatch(signInFailure(data.message))
      return;
    }
    dispatch(signInSuccess(data))
    navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }
return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='Email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type='password' placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='text-white bg-blue-500 p-3 rounded-lg uppercase hover:opacity-70 disabled:opacity-50'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-10'>
        <p>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignIn;