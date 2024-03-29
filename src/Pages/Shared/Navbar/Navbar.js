import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }
  const menuItems = <React.Fragment>

    <li className='text-lg font-semibold'><Link to='/home'>Home</Link></li>
    
    <li className='text-lg font-semibold'><Link to='/blog'>Blog</Link></li>

    
    {
      user?.uid ?
        <>
          <li className='text-lg font-semibold'><Link onClick={handleLogout}>Sign out</Link></li>
          <li className='text-lg font-semibold'><Link to='/dashboard'>Dashboard</Link></li>
        </>
        :
        <li className='text-lg font-semibold'><Link to='/login'>Login</Link></li>
    }
  </React.Fragment>
  return (
    <div className='max-w-[1280px] mx-auto'>
      <div className="navbar flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-3xl text1 font-semibold">Car Dealer</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

        </label>
      </div>
    </div>
  );
};

export default Navbar;