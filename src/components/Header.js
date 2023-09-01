import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearchView)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      

    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse");
        
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
        
      }
    });
    return()=>unsubscribe();
  },[])

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img className='w-44 mx-auto md:mx-0' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="Logo"/>
      {user &&(<div className='justify-between flex p-2'>
      {showGptSearch && (<select className='p-2 m-2 bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
      </select>)}
      <button className='py-2 px-4 bg-purple-800 text-white mx-4 my-2 rounded-lg' onClick={handleGptSearchClick}>GPT Search</button>
        <img className="hidden md:block w-10 h-10" alt="usericon" src={user.photoUrl}></img>
      <button onClick={handleSignOut} className='font-bold text-white'>Sign out</button>
      </div>)}
    </div>
  )
}

export default Header
