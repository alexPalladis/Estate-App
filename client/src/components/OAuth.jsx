import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {app} from '../firebase';
import {useDispatch} from 'react-redux';
import {signInSuccess} from '../redux/user/userSlice';
import {useNavigate} from 'react-router-dom';

export default function OAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth,provider)
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/google`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify({name:result.user.displayName, email:result.user.email, photo:result.user.photoURL})
            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.log('Could not sign in with Google',error);
        }
    }
  return (
    <button 
    type='button' 
    className='bg-red-500 text-white p-3 rounded-lg hover:opacity-70'
    onClick={handleGoogleClick}
    >
        Continue with Google
    </button>
  )
}
