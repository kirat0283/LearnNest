// import React from 'react'
// import { Link } from 'react-router-dom'
// import { assets, dummyEducatorData } from '../../assets/assets';
// import {UserButton,useUser} from '@clerk/clerk-react'
// const Navbar = () => {
//   const educatorData = dummyEducatorData
//   const {user} = useUser()
//   return (
//     <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3'>
//       <Link to='/'>
//       <img src={assets.logo} alt="Logo" className='w-28 lg:w-32' />
//       </Link>
//       <div className='flex items-center gap-5 text-gray-500 relative'>
//         <p>Hi! {user ? user.fullName : 'Developers'}</p>
//         {user ? <UserButton/> : <img className='max-w-8' src={assets.profile_img}/>}
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import { assets, dummyEducatorData } from '../../assets/assets'
import { UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const educatorData = dummyEducatorData
  const { user } = useUser()

  return (
    <div
      className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 
      border-b border-gray-200 py-4 bg-purple-50"
    >
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-32 lg:w-36 cursor-pointer" />
      </Link>

      <div className="flex items-center gap-5 text-gray-700 relative">
        <p className="font-medium">Hi! {user ? user.fullName : 'Developers'}</p>
        {user ? (
          <UserButton />
        ) : (
          <img className="max-w-8 rounded-full border border-gray-300" src={assets.profile_img} />
        )}
      </div>
    </div>
  )
}

export default Navbar
