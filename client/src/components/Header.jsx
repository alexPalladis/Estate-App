import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function Header() {
    const {currentUser} = useSelector((state) => state.user);
  return (
    <header className="bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 shadow-md">
        <div className="container mx-auto flex justify-between items-center max-w-6xl p-4">
            <Link to='/' className="flex items-center space-x-2">
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className="text-2xl font-bold text-white">🏙️RealEstate</span>
                    <span className='text-2xl font-semibold text-slate-700'>App</span>
                </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center shadow-md px-4 py-2'>
                <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none text-gray-600 w-24 sm:w-64'/>
                <FaSearch className='text-gray-400'/>
            </form>
            <ul className='flex gap-4 '>
                <Link to='/'>
                    <li className='hidden sm:inline text-sm text-white font-medium cursor-pointer hover:text-gray-400 transition'>Home</li>
                </Link>

                <Link to='/about'>
                    <li className='hidden sm:inline text-sm text-white font-medium cursor-pointer hover:text-gray-400 transition'>About</li>
                </Link>
                
                <Link to='/profile'>
                    {currentUser ?
                     (<img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'/>) :
                      <li className='text-white text-sm font-medium bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500 transition cursor-pointer'>Sign In</li>}
                </Link>
                
            </ul>
        </div>
        
    </header>
  )
}
